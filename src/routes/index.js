const { Router } = require("express");
const activity = require("./routesActivity");
const countries = require("./routesCountries");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/activities", activity);

module.exports = router;
