import React, {useState} from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const { allWpPost } = useStaticQuery(graphql`
    query SearchData {
      allWpPost {
        nodes {
          id
          title
          slug
          excerpt
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
    }
  `);

  const getFilteredData = (term) => {
    setFilteredData(allWpPost.nodes.filter(post => post.title.toLowerCase() === term.toLowerCase()));
  };

  return (
    <>
      <form>
        <input title="search" value={searchTerm} onChange={({ currentTarget }) => {
          setSearchTerm(currentTarget.value);
          getFilteredData(currentTarget.value);
        }}/>
        Search for: { searchTerm }
      </form>
      <div>
        { filteredData.map(post =>
          <div id={ post.id }>
            <h3><Link to={ `/blog/${post.slug}` }>{ post.title }</Link></h3>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        ) }
      </div>
    </>
  );
};

export default Search;