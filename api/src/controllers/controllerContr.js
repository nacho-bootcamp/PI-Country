const axios = require("axios");
const { Country, Activity } = require("../database/db.js");
const { Op } = require("sequelize");

// Obtiene todos los países de la API restcountries y los almacena en la base de datos
const getAllCountries = async (req, res) => {
  const response = await axios("https://restcountries.com/v3/all");
  const countriesApi = response.data.map((countryD) => ({
    id: countryD.cca3,
    name: countryD.name.common,
    flag: countryD.flags[1],
    continent: countryD.continents[0],
    capital: countryD.capital != null ? countryD.capital[0] : "has no capital",
    subregion: countryD.subregion,
    area: countryD.area,
    population: countryD.population,
  }));
  const country = await Country.bulkCreate(countriesApi);

  res.status(200).json(countriesApi);
  return country;
};

// Obtiene todos los países de la base de datos junto con las actividades asociadas
const getCountries = async () => {
  return await Country.findAll({
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
};

// Obtiene un país por nombre de la base de datos junto con las actividades asociadas

const getByName = async (name) => {
  const response = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
  return response.length ? response : getCountries();
};

// Obtiene un país por ID de la base de datos junto con las actividades asociadas
const getById = async (id) => {
  if (!id) throw Error(` the country with that ${id} does not exist `);

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

module.exports = { getAllCountries, getById, getByName, getCountries };
