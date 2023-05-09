const axios = require("axios");
const { Country, Activity } = require("../database/db.js");

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

const getById = async (id) => {
  if (!id) throw Error("Pais no encontrado");

  const countries = await Country.findOne({
    where: {
      id: id.toUpperCase(),
    },
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
  return countries;
};
module.exports = { getAllCountries, getById };
