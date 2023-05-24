import axios from "axios";
import { CLEAN, GET_ACTIVITIES, POST } from "./actions";

export const getActivities = () => {
  return async function (dispatch) {
    const responseActivity = await axios.get(
      "http://localhost:3001/activities"
    );
    const activities = responseActivity.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

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
