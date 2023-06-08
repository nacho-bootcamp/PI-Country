import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesByName } from "../../redux/actions/countries";
import seach from "../../assets/img/search.png";

import styles from "./SearchBar.module.css";

const SearchBar = ({ handlerSear }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInput = (event) => {
    setName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerSear();
    dispatch(getCountriesByName(name));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Country..."
        onChange={handlerInput}
      />
      <button className={styles.button} onClick={handlerSubmit} type="submit">
        <img className={styles.search} src={seach} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
