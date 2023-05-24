import { GET_ACTIVITIES } from "../actions/actions";

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

    default:
      return state;
  }
};
