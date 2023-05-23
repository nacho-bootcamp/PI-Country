import axios from "axios";
import { CLEAN, GET_ACTIVITIES, FILTER_BY_ACT, POST } from "./actions";

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activities");
    const activities = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};
export const filterActivity = (payload) => ({
  type: FILTER_BY_ACT,
  payload,
});
export const createActivities = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/activities",
      payload
    );
    dispatch({ type: POST, payload: response.data });
  };
};

export const cleanActivity = () => {
  return {
    type: CLEAN,
  };
};
