import React, { useState } from "react";
import styles from "./Paginado.module.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  // Genera un array con los números de página disponibles
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Maneja el evento de clic en un número de página
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  // Maneja el evento de clic en el botón next
  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      paginate(currentPage + 1);
    }
  };

  // Maneja el evento de clic en el botón back
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      paginate(currentPage - 1);
    }
  };

  // Genera los números de página visibles en la interfaz
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
      {/* Botón Back */}
      {currentPage > 1 && (
        <button className={styles.navigationButton} onClick={handleBack}>
          Back
        </button>
      )}

      {/* Números de página */}
      {renderPageNumbers()}

      {/* Botón Next*/}
      {currentPage < pageNumbers.length && (
        <button className={styles.navigationButton} onClick={handleNext}>
          Next
        </button>
      )}
    </ul>
  );
};

export default Pagination;
