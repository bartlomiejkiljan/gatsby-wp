import React, {useState} from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
    setFilteredData(allData.filter(post =>{
      const content = post.content ? post.content.toLowerCase() : '';

      return post.title.toLowerCase().includes(term) || content.includes(term)
      }
    ));
  };

  const handleSearchInput = ({ currentTarget: { value } }) => {
    setSearchTerm(value);

    if (value.length) {
      getFilteredData(value);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <>
      <form>
        <input title="search" value={searchTerm.toLowerCase()} onChange={(e) => handleSearchInput(e)}/>
      </form>
      { filteredData.length ?
        <ul>
          { filteredData.map(post => <li id={post.id}><Link to={`/blog/${post.slug}`}>{post.title} - {post.nodeType}</Link></li>) }
        </ul>
        : searchTerm.length > 0 && <p>No search results</p>
      }
    </>
  );
};

export default Search;