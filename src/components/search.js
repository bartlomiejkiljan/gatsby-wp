import React, {useState} from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

const SEARCH_RESULTS_LIMIT = 5;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false);

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

  return (
    <>
      <button onClick={() => toggleSearchForm() }>
        { toggleSearch ? 'Close search' : 'Open search' }
      </button>
      { toggleSearch &&
        <div>
          <form>
            <input
              name="search"
              autoFocus={true}
              autoComplete="off"
              autoCorrect="off"
              value={searchTerm.toLowerCase()}
              onChange={(e) => handleSearchInput(e)}/>
          </form>
          { filteredData.length ?
            <ul>
              { filteredData.map(post =>
                <li id={post.id} key={post.id}>
                  <Link to={ post.nodeType === 'Page' ? `/${post.slug}` : `/blog/${post.slug}` }>
                    {post.title} - {post.nodeType}
                  </Link>
                </li>)
              }
            </ul>
            : searchTerm.trim().length > 0 && <p>No search results</p>
          }
        </div>
      }
    </>
  );
};

export default Search;