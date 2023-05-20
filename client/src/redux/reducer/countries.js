import {
  CLEAN_COUNTRY_ID,
  GET_BY_ID,
  GET_COUNTRIES,
  SEARCH,
  FILTER,
  ORDER,
  POPULATION,
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

    case ORDER:
      let orderedCountries;
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
