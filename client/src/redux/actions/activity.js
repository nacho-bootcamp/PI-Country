import axios from "axios";
import { CLEAN, GET_ACTIVITIES } from "./actions";

export const getActivities = () => {
  return async function (dispatch) {
    try {
      const responseActivity = await axios.get(
        "http://localhost:3001/activities"
      );
      const activities = responseActivity.data;
      dispatch({ type: GET_ACTIVITIES, payload: activities });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanActivity = () => {
  return {
    type: CLEAN,
  };
};
