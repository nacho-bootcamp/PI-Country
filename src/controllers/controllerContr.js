const axios = require("axios");
const { Country } = require("../database/db.js");

const getAllCountries = async (req, res) => {
  const response = await axios("https://restcountries.com/v3/all");
  const countriesApi = response.data.map((countryD) => ({
    id: countryD.cca3,
    name: countryD.name.common,
    flag: countryD.flags[1],
    continent: countryD.continents[0],
    capital:
      countryD.capital != null ? countryD.capital[0] : "no tiene capital",
    subregion: countryD.subregion,
    area: countryD.area,
    population: countryD.population,
  }));
  const country = await Country.bulkCreate(countriesApi);

  res.status(200).json(countriesApi);
  return country;
};

module.exports = { getAllCountries };
