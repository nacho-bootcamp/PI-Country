import { GET_ACTIVITIES, FILTER_BY_ACT, POST } from "../actions/actions";
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

    case FILTER_BY_ACT:
      const filtredCountriesByActivities = state.allCountries;
      const continentFiltered = filtredCountriesByActivities.filter((act) => {
        return act.name === action.payload;
      });

      if (action.payload === "All") {
        return { ...state, countries: filtredCountriesByActivities };
      } else {
        return {
          ...state,
          countries: continentFiltered,
        };
      }
    case POST:
      return {
        ...state,
      };

    default:
      return state;
  }
};
