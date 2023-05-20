const { Router } = require("express");
const {
  getActiviti,
  postActiviti,
  getByIdAct,
  putActiviti,
} = require("../handlers/handlerAct");

const activity = Router();

activity.get("/", getActiviti);

activity.post("/", postActiviti);

activity.get("/:id", getByIdAct);

activity.put("/", putActiviti);

module.exports = activity;
