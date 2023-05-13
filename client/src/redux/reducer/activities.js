import { CREATE_ACTIVITY, CLEAN, GET_ACTIVITIES } from "../actions/actions";

const initialState = {
  activities: { all: [], loaded: false },
  newActivity: { created: false, info: "", error: "" },
  newActivityloading: false,
};

export const activity = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...state, activities: { all: action.payload, loaded: true } };
    case CREATE_ACTIVITY:
      return action.payload.error
        ? { ...state, newActivity: { created: false, info: action.payload } }
        : { ...state, newActivity: { created: true, info: action.payload } };
    case CLEAN:
      return {
        activities: { all: [], loaded: false },
        newActivity: { created: false, info: "", error: "" },
      };
    default:
      return state;
  }
};
