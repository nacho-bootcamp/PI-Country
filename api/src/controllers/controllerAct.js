const { Activity, Country } = require("../database/db");

// Obtener todas las actividades
const getAllActivities = async () => {
  const allActivities = await Activity.findAll();

  // Verificar que existan actividades
  if (!allActivities.length) throw Error("There is no activity");

  // Devolver todas las actividades
  return allActivities;
};

// Crear una nueva actividad
const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  // Verificar que se proporcionen todos los datos necesarios
  if (!name || !difficulty || !duration || !season || !countries)
    throw Error("Information is missing");

  // Crear la actividad en la base de datos
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  // Obtener la lista de países asociados a la actividad
  const countriesList = await Country.findAll({
    where: { id: countries },
  });

  // Asociar los países a la actividad
  await newActivity.addCountries(countriesList);
};

const getByIdActiviti = async (id) => {
  if (!id) throw Error(`the activity with that ${id} does not exist`);
  const activity = await Activity.findOne({
    where: {
      id,
    },
  });
  return activity;
};

const putActivities = async (id, name, difficulty, duration, season) => {
  const activity = await Activity.findOne({
    where: {
      id,
    },
  });

  if (activity.error) return activity;

  activity.name = name || activity.name;
  activity.difficulty = difficulty || activity.difficulty;
  activity.duration = duration || activity.duration;
  activity.season = season || activity.season;
  console.log(activity);
  await activity.save();
  return activity;
};

const deleteActivity = async (id) => {
  const activiti = await Activity.findByPk(id);

  await activiti.destroy();
};

// Exportar los métodos
module.exports = {
  createActivity,
  getAllActivities,
  getByIdActiviti,
  putActivities,
  deleteActivity,
};
