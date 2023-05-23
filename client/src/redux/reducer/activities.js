import { GET_ACTIVITIES, FILTER, POST } from "../actions/actions";
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
      const filtredCountriesByActivities = state.allCountries;
      const continentFilteredBA = filtredCountriesByActivities.filter((c) => {
        return c.activities.find((c) => {
          return c.name === action.payload;
        });
      });

      if (action.payload === "todos") {
        return { ...state, countries: filtredCountriesByActivities };
      } else {
        return {
          ...state,
          countries: continentFilteredBA,
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
