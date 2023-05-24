import { GET_ACTIVITIES, POST } from "../actions/actions";

const initialState = {
  activities: [],
};

export const activity = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case POST:
      return {
        ...state,
      };

    default:
      return state;
  }
};
