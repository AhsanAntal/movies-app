import React from "react";
import { Pagination as PaginationReactstrap } from "react-bootstrap";

const Pagination = ({ currentPage, moviesPerPage, totalMovies, paginate }) => {
  const pages = new Array(Math.ceil(totalMovies / moviesPerPage)).fill(0);

  return (
    <div>
      <PaginationReactstrap className="justify-content-center" size="md">
        {pages.map((_value, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationReactstrap.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </PaginationReactstrap.Item>
          );
        })}
      </PaginationReactstrap>
    </div>
  );
};

export default Pagination;
