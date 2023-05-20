const { Router } = require("express");
const {
  getActiviti,
  postActiviti,
  getByIdAct,
} = require("../handlers/handlerAct");

const activity = Router();

activity.get("/", getActiviti);

activity.post("/", postActiviti);

activity.get("/:id", getByIdAct);

module.exports = activity;
