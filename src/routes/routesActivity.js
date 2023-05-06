const { Router } = require("express");
const { getActiviti, postActiviti } = require("../handlers/handlerAct");

const activity = Router();

activity.get("/", getActiviti);

activity.post("/", postActiviti);

module.exports = activity;
