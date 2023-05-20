import { GET_ACTIVITIES, FILTER } from "../actions/actions";
import { initialState as countriesInitialState } from "./countries";

const initialState = {
  allCountries: countriesInitialState.allCountries,
  countries: countriesInitialState.countries,
  activities: [],
};

export const activity = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case FILTER:
      const allActCountries = state.allCountries;
      const actFilter =
        action.payload === "All"
          ? allActCountries.filter((el) => el.activities.length > 0)
          : allActCountries.filter(
              (el) =>
                el.activities &&
                el.activities.map((el) => el.name).includes(action.payload)
            );
      return {
        ...state,
        countries: actFilter,
      };

    default:
      return state;
  }
};
