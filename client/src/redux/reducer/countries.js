import {
  CLEAN_COUNTRY_ID,
  GET_BY_ID,
  GET_COUNTRIES,
  SEARCH,
  FILTER,
  ORDER,
  //ORDER,
} from "../actions/actions";

const initialState = {
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
    // case ORDER:
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
      let order =
        action.payload === "Ascendente"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: order,
      };
    case CLEAN_COUNTRY_ID:
      return { ...state, selectedCountry: {}, allCountries: [], countries: [] };
    default:
      return state;
  }
};
