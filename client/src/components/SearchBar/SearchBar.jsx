import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesByName } from "../../redux/actions/countries";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInput = (event) => {
    setName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountriesByName(name));
  };

  return (
    <div>
      <input type="text" placeholder="search country" onChange={handlerInput} />
      <button onClick={handlerSubmit} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
