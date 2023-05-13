import React from "react";
import { useDispatch } from "react-redux";
import { filterContinent } from "../../redux/actions/countries";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterContinent(e.target.value));
  };

  return (
    <div>
      <h3>Filter by Continent:</h3>
      <button value="">All</button>
      <button value="Africa" onClick={handleFilter}>
        Africa
      </button>
      <button value="Americas" onClick={handleFilter}>
        Americas
      </button>
      <button value="Asia" onClick={handleFilter}>
        Asia
      </button>
      <button value="Europe" onClick={handleFilter}>
        Europe
      </button>
      <button value="Oceania" onClick={handleFilter}>
        Oceania
      </button>
    </div>
  );
};

export default Filter;
