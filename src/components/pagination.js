import React from "react";
import {Link} from "gatsby";

const Pagination = ({ currentPage, lastPage, slug }) => (
  <div>
    { currentPage >= 2 &&
      <Link to={ currentPage === 2 ? `/${slug}` : `/${slug}/page/${currentPage - 1}`}>Previous page</Link>
    }
    { lastPage >=2 && <p>Page { currentPage } of { lastPage }</p> }
    { currentPage < lastPage &&
      <Link to={`/${slug}/page/${currentPage + 1}`}>Next page</Link>
    }
  </div>
);

export default Pagination;