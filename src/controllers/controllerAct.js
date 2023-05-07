const { Activity, Country } = require("../database/db");

const actionCreaction = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const countriesList = await Country.findAll({
    where: { id: countries },
  });

  createAct.addCountries(countriesList);
};

module.exports = { actionCreaction };
