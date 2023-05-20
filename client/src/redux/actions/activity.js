import axios from "axios";
import { CLEAN, GET_ACTIVITIES, FILTER } from "./actions";

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activities");
    const activities = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};
export const filterActivity = (payload) => ({
  type: FILTER,
  payload: payload,
});
export const createActivities = (data) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/activities", data);
    return response;
  };
};

export const cleanActivity = () => {
  return {
    type: CLEAN,
  };
};
