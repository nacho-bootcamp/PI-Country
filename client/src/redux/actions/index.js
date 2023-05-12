import axios from "axios";
import { GET_COUNTRIES } from "./actions";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      dispatch({ type: GET_COUNTRIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
