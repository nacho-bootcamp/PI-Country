const { Router } = require("express");
const {
  getActiviti,
  postActiviti,
  getByIdAct,
  putActiviti,
  deleteActiviti,
} = require("../handlers/handlerAct");

const activity = Router();

activity.get("/", getActiviti);

activity.post("/", postActiviti);

activity.get("/:id", getByIdAct);

activity.put("/", putActiviti);

activity.delete("/:id", deleteActiviti);

module.exports = activity;
