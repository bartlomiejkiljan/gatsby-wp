import React, {useState, useRef} from "react";
import {graphql, useStaticQuery} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

import {
  SearchContainer,
  Form,
  SearchIcon,
  SearchInput,
  SearchPreview,
  SearchResults, ResultsList, ResultsListItem, ResultsListLink, NoResult
} from './search-styles'

const SEARCH_RESULTS_LIMIT = 5;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [activeResult, setActiveResult] = useState(0);

  const resultList = useRef(null);

  const { allWpPost, allWpPage } = useStaticQuery(graphql`
    query SearchData {
      allWpPost {
        nodes {
          id
          title
          slug
          excerpt
          content
          nodeType
          categories {
            nodes {
              id
              link
              name
            }
          }
          tags {
            nodes {
              id
              name
              link
            }
          }
        }
      }
      allWpPage {
        nodes {
          id
          title
          slug
          uri
          content
          nodeType
        }
      }
    }
  `);

  const allData = [
    ...allWpPost.nodes,
    ...allWpPage.nodes
  ];

  const getFilteredData = (term) => {
    const filterData = allData.filter((post, i) => {
      if (i < SEARCH_RESULTS_LIMIT) {
        const content = post.content ? post.content.toLowerCase() : '';

        return post.title.toLowerCase().includes(term) || content.includes(term)
      }
    });
    setFilteredData(filterData)
    setActiveResult(0);
  };

  const handleSearchInput = ({ currentTarget: { value } }) => {
    setSearchTerm(value);
    const keyword = value.trim();

    if (keyword.length) {
      getFilteredData(keyword);
    } else {
      setFilteredData([]);
    }
  };

  const toggleSearchForm = () => {
    if (toggleSearch) {
      setFilteredData([]);
      setSearchTerm('');
    }
    setToggleSearch(toggleSearch => !toggleSearch)
  };

  const handleArrowPress = ({key}) => {
    const searchResultsCount = filteredData.length - 1;

    if (key === 'ArrowDown' && searchResultsCount > 0) {
      if (activeResult >= searchResultsCount) {
        setActiveResult(0)
      } else {
        setActiveResult(activeResult + 1)
      }
    } else if (key === 'ArrowUp' && searchResultsCount > 0) {
      if (activeResult === 0) {
        setActiveResult(searchResultsCount)
      } else {
        setActiveResult(activeResult - 1);
      }
    }
  };

  const handleSubmitForm = (e) => {
    if (activeResult !== -1) {
      e.preventDefault();
      const resultLink = resultList.current.children[activeResult].getElementsByTagName('a')[0].getAttribute('href');
      window.open(resultLink, '_self');
    }
  };

  return (
    <SearchContainer>
      { toggleSearch &&
        <SearchPreview>
          <Form onSubmit={e => handleSubmitForm(e)}>
            <SearchInput
              name="search"
              autoFocus={toggleSearch}
              autoComplete="off"
              autoCorrect="off"
              placeholder="Search..."
              value={searchTerm.toLowerCase()}
              onChange={e => handleSearchInput(e)}
              onKeyDown={e => handleArrowPress(e)}
            />
          </Form>
            { filteredData.length ?
              <SearchResults>
                <ResultsList ref={resultList}>
                  { filteredData.map((post, i) =>
                    <ResultsListItem id={post.id} key={post.id} className={activeResult === i ? 'active' : ''}>
                      <ResultsListLink to={ post.nodeType === 'Page' ? `/${post.slug}` : `/blog/${post.slug}` }>
                        {post.title} - {post.nodeType}
                      </ResultsListLink>
                    </ResultsListItem>)
                  }
                </ResultsList>
              </SearchResults>
              :
              searchTerm.trim().length > 0 &&
                <SearchResults>
                  <NoResult>No search results</NoResult>
                </SearchResults>
            }
        </SearchPreview>
      }
      <SearchIcon onClick={() => toggleSearchForm() }>
        { toggleSearch ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faSearch} /> }
      </SearchIcon>
    </SearchContainer>
  );
};

export default Search;