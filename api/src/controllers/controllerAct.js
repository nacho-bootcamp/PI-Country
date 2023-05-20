const { Activity, Country } = require("../database/db");

// Obtener todas las actividades
const getAllActivities = async () => {
  const allActivities = await Activity.findAll();

  // Verificar que existan actividades
  if (!allActivities.length) throw Error("No existe ninguna actividad");

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
    throw Error("Falta información");

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

// Exportar los métodos
module.exports = { createActivity, getAllActivities, getByIdActiviti };
