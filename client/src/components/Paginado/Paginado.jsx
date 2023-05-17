import React, { useState } from "react";
import styles from "./Paginado.module.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      paginate(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      paginate(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const visiblePageNumbers = pageNumbers.slice(
      currentPage - 1,
      currentPage + 6
    );

    return visiblePageNumbers.map((number) => (
      <li
        key={number}
        className={`${styles.pageNumber} ${
          number === currentPage ? styles.active : ""
        }`}
        onClick={() => handleClick(number)}
      >
        {number}
      </li>
    ));
  };

  return (
    <ul className={styles.pagination}>
      {currentPage > 1 && (
        <button className={styles.navigationButton} onClick={handleBack}>
          Back
        </button>
      )}
      {renderPageNumbers()}
      {currentPage < 25 && (
        <button
          className={styles.navigationButton}
          disabled={currentPage === pageNumbers.length}
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </ul>
  );
};

export default Pagination;
