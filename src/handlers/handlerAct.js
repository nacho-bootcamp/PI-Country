const {
  createActivity,
  getAllActivities,
} = require("../controllers/controllerAct");

const getActiviti = async (req, res) => {
  try {
    const allAct = await getAllActivities();
    return res.status(200).json(allAct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postActiviti = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const createAct = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    return res.status(200).send("se creo exitosamente la actividad");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getActiviti, postActiviti };
