const { Router } = require("express");
const { idContries, contriesName } = require("../handlers/handlerContr");
const { getAllCountries } = require("../controllers/controllerContr");

const countries = Router();

countries.get("/", getAllCountries);
countries.get("/", contriesName);
countries.get("/:id", idContries);

module.exports = countries;
