import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div>
        <h3>Filter by Continent:</h3>
        <button value="All">All</button>
        <button value="Africa">Africa</button>
        <button value="Americas">Americas</button>
        <button value="Asia">Asia</button>
        <button value="Europe">Europe</button>
        <button value="Oceania">Oceania</button>
      </div>
      <div>
        <h3>Order:</h3>
        <button value="Asc">Ascendente</button>
        <button value="Des">Descendente</button>
      </div>
    </div>
  );
};

export default Filter;
