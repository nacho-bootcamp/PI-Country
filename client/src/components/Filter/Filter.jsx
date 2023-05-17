import React from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries } from "../../redux/actions/countries";
import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries.countries);

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
      <div>
        {country.map(({ id, name, flag, continent }) => {
          return (
            <Link to={`detail/${id}`}>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={flag} alt={`${name} flag`} />
                </div>
                <div className={styles.infoContainer}>
                  <h4 className={styles.nameCountry}>{name}</h4>
                  <h4>Continent</h4>
                  <p>{continent}</p>
                </div>
              </div>
            </Link>
          );
        })}
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
