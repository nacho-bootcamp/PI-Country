const { Router } = require("express");
const { allContries, idContries } = require("../handlers/handlerContr");

const countries = Router();

countries.get("/", allContries);
countries.get("/:id", idContries);

module.exports = countries;
