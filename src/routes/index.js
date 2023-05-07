const { Router } = require("express");
const activity = require("./routesActivity");
const countries = require("./routesCountries");

const router = Router();

router.use("/countries", countries);
router.use("/activities", activity);

module.exports = router;
