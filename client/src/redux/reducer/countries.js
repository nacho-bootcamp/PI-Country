import {
  CLEAN,
  CLEAN_COUNTRY_ID,
  FILTER,
  GET_BY_ID,
  GET_COUNTRIES,
  //ORDER,
} from "../actions/actions";

const initialState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: {},
  selectedContinent: "",
  loading: false,
  error: null,
};

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTER:
      const filters =
        action.payload === ""
          ? state.countries
          : state.countries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        selectedContinent: action.payload,
        filteredCountries: filters,
      };

    // case ORDER:
    case GET_BY_ID:
      return {
        ...state,
        selectedCountry: { data: action.payload, loaded: true },
      };
    case CLEAN_COUNTRY_ID:
      return { ...state, selectedCountry: {} };
    case CLEAN:
      return {
        countries: [],
        filteredCountries: [],
        selectedCountry: {},
        selectedContinent: "",
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
