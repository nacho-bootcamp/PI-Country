const { Activity, Country } = require("../database/db");

const activitiAll = async () => {
  const allActiviti = await Activity.findAll();
  if (!allActiviti.length) throw Error("No existe ninguna Actividad");
  return allActiviti;
};

const actionCreaction = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!name || !difficulty || !duration || !season || !countries)
    throw Error("Falta info ");
  const creation = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const countriesList = await Country.findAll({
    where: { id: countries },
  });

  await creation.addCountries(countriesList);
};

module.exports = { actionCreaction, activitiAll };
