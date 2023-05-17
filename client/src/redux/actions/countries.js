import axios from "axios";
import {
  GET_COUNTRIES,
  GET_BY_ID,
  CLEAN_COUNTRY_ID,
  SEARCH,
  FILTER,
  // ORDER,
} from "./actions";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      const countries = response.data;
      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      dispatch({ type: GET_COUNTRIES, payload: { error: error.message } });
    }
  };
};
export const getCountriesById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      const countries = response.data;
      dispatch({ type: GET_BY_ID, payload: countries });
    } catch (error) {
      dispatch({ type: GET_BY_ID, payload: { error: error.message } });
    }
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries?name=${name})}`
      );
      const countries = response.data;
      dispatch({ type: SEARCH, payload: countries });
    } catch (error) {
      dispatch({ type: SEARCH, payload: { error: error.message } });
    }
  };
};

export const filterCountries = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};

export const cleanId = () => {
  return {
    type: CLEAN_COUNTRY_ID,
  };
};
