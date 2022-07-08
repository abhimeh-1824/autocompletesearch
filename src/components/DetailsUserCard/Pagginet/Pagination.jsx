import React from "react";
import "./pagginet.css";
const Pagination = ({ pages, handlePageNumber }) => {
  return (
    <div className="max-width page-btn-contenair">
      <button className="pages-btn" onClick={() => handlePageNumber(-1)}>
        Prev
      </button>
      {pages.map((pageNumber, index) => (
        <button
          className="pages-btn"
          onClick={() => handlePageNumber(index + 1)}
          key={index}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pages-btn" onClick={() => handlePageNumber(1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
