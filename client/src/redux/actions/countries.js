import axios from "axios";
import {
  GET_COUNTRIES,
  GET_BY_ID,
  CLEAN,
  FILTER,
  CLEAN_COUNTRY_ID,
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

export const filterCountry = (name) => {
  if (!name) name = "";
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((response) => {
        dispatch({
          type: FILTER,
          payload: { filterByName: response.data, filterName: name },
        });
      })
      .catch((error) => {
        console.error(error);
      });
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

export const cleanId = () => {
  return {
    type: CLEAN_COUNTRY_ID,
  };
};

export const clean = () => {
  return {
    type: CLEAN,
  };
};
