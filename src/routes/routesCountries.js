const { Router } = require("express");
const {
  allContries,
  idContries,
  contriesName,
} = require("../handlers/handlerContr");

const countries = Router();

countries.get("/all", allContries);
countries.get("/", contriesName);
countries.get("/:id", idContries);

module.exports = countries;
