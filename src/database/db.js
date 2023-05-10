require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const countryModel = require("./models/Country");
const activityModel = require("./models/Activity");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false,
  }
);

countryModel(sequelize);
activityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "CountryAct" });
Activity.belongsToMany(Country, { through: "CountryAct" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
