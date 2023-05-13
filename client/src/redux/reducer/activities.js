import {
  CREATE_ACTIVITY,
  CLEAN,
  GET_ACTIVITIES,
  FILTER,
} from "../actions/actions";

const initialState = {
  activities: [],
  selectedActivity: "",
  filteredActivities: [],
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
    case FILTER:
      const filterAct =
        action.payload === ""
          ? state.activities
          : state.activities.filter(
              (activity) => activity.name === action.payload
            );
      return {
        ...state,
        selectedActivity: action.payload,
        filteredActivities: filterAct,
      };
    default:
      return state;
  }
};
