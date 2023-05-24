import {
  CLEAN_COUNTRY_ID,
  GET_BY_ID,
  GET_COUNTRIES,
  SEARCH,
  FILTER,
  ORDER,
  POPULATION,
  FILTER_BY_ACTIVITY,
} from "../actions/actions";

export const initialState = {
  countries: [],
  allCountries: [],
  selectedCountry: {},
};

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        selectedCountry: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTER:
      const allCountries = state.allCountries;
      const countriesFilt =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: countriesFilt,
      };
    case FILTER_BY_ACTIVITY:
      if (action.payload === "All") {
        return { ...state, countries: state.allCountries };
      }
      const countriesFilterByActivity = [];

      state.allCountries.forEach((country) => {
        const countryFilter = country.Activities.filter(
          (activity) => activity.name === action.payload
        );
        if (countryFilter.length) {
          countriesFilterByActivity.push(country);
        }
      });

      return {
        ...state,
        countries: countriesFilterByActivity,
      };

    case ORDER:
      let orderedCountries;
      const orderCountries = state.allCountries;

      if (action.payload === "All") {
        orderedCountries = orderCountries;
      }
      if (action.payload === "Ascendente") {
        orderedCountries = [...state.countries].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (action.payload === "Descendente") {
        orderedCountries = [...state.countries].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        countries: orderedCountries,
      };

    case POPULATION:
      let populations;
      const populationCountry = state.allCountries;
      if (action.payload === "All") {
        populations = populationCountry;
      }
      if (action.payload === "Mayor") {
        populations = [...state.countries].sort(
          (a, b) => b.population - a.population
        );
      } else if (action.payload === "Menor") {
        populations = [...state.countries].sort(
          (a, b) => a.population - b.population
        );
      } else {
        populations = [...state.countries];
      }
      return {
        ...state,
        countries: populations,
      };

    case CLEAN_COUNTRY_ID:
      return { ...state, selectedCountry: {}, allCountries: [], countries: [] };
    default:
      return state;
  }
};
