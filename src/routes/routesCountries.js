const { Router } = require("express");
const {
  getAllCountries,
  idContries,
  contriesName,
} = require("../handlers/handlerContr");

const countries = Router();

countries.get("/", getAllCountries);
countries.get("/", contriesName);
countries.get("/:id", idContries);

module.exports = countries;
