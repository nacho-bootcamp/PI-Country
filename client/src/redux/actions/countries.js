import axios from "axios";
import {
  GET_COUNTRIES,
  GET_BY_ID,
  CLEAN,
  FILTER,
  CLEAN_COUNTRY_ID,
  ORDER,
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

export const filterContinent = (continent) => {
  return { type: FILTER, payload: continent };
};

export const orderCard = (order) => {
  return { type: ORDER, payload: order };
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
