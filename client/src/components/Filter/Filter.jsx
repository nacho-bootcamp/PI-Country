import React from "react";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions/countries";
//import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const handlerFilter = (event) => {
    dispatch(filterCountries(event.target.value));
  };
  return (
    <div className={styles.filter}>
      <div>
        <h3>Filter by Continent:</h3>
        <select onChange={handlerFilter}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* <div>
        <h3>Order:</h3>
        <select name="" id="">
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div> */}
    </div>
  );
};

export default Filter;
