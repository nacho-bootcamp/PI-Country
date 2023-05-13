import {
  CLEAN,
  CLEAN_COUNTRY_ID,
  FILTER,
  GET_BY_ID,
  GET_COUNTRIES,
} from "../actions/actions";

const initialState = {
  countries: [],
  filterCountries: [],
  countryById: {},
  activePage: { page: 1, btn: null },
  loaded: false,
};

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filterCountries: action.payload,
        loaded: true,
      };
    case FILTER:
      let { filterByName, activity, order, continent } = action.payload;
      if (continent && continent !== "All")
        filterByName = filterByName.filter((c) => c.continent === continent);
      if (activity && activity !== "All")
        filterByName = filterByName.filter((c) => {
          const activities = c.Activities.filter((acc) => {
            return acc.name === activity;
          });
          return activities.length ? activities : false;
        });
      if (order) {
        switch (order) {
          case "ASC_ALPHABETICALLY":
            filterByName = filterByName.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          case "DES_ALPHABETICALLY":
            filterByName = filterByName.sort((a, b) =>
              b.name.localeCompare(a.name)
            );
            break;
          case "ASC_POPULATION":
            filterByName = filterByName.sort(
              (a, b) => a.population - b.population
            );
            break;
          case "DES_POPULATION":
            filterByName = filterByName.sort(
              (a, b) => b.population - a.population
            );
            break;
          default:
            break;
        }
        if (filterByName.length === 0)
          filterByName.push({ error: "No se encontraron paises" });
        return { ...state, filteredCountries: filterByName };
      }
    case GET_BY_ID:
      return { ...state, countryById: { data: action.payload, loaded: true } };
    case CLEAN_COUNTRY_ID:
      return { ...state, countryById: {} };
    case CLEAN:
      return {
        countries: [],
        countriesByName: [],
        countriesByContinent: [],
        countriesByPopulation: [],
        countriesByActivity: [],
        countryById: {},
        loaded: false,
      };
    default:
      return state;
  }
};
