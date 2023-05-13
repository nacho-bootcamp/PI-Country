import axios from "axios";
import {
  CREATE_ACTIVITY,
  CLEAN,
  GET_ACTIVITIES,
  LOADING_NEW_ACTIVITY,
  FILTER,
} from "./actions";

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activities");
    const activity = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: activity });
  };
};
export const filterActivity = (activity) => ({
  type: FILTER,
  payload: activity,
});
export const createActivities = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOADING_NEW_ACTIVITY, payload: true });
      const response = await axios.post("hhttp://localhost:3001/activities");
      const activities = response.data;
      dispatch({ type: LOADING_NEW_ACTIVITY, payload: false });
      dispatch({ type: CREATE_ACTIVITY, payload: activities });
    } catch (error) {
      dispatch({ type: LOADING_NEW_ACTIVITY, payload: false });
      dispatch({
        type: CREATE_ACTIVITY,
        payload: { error: error.response.data },
      });
    }
  };
};

export const cleanActivity = () => {
  return {
    type: CLEAN,
  };
};
