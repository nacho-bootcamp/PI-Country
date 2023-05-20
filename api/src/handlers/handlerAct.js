const {
  createActivity,
  getAllActivities,
  getByIdActiviti,
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
    return res.status(200).send("the activity was created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getByIdAct = async (req, res) => {
  const { id } = req.params;
  try {
    const getActivity = await getByIdActiviti(id);
    return res.status(200).json(getActivity);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getActiviti, postActiviti, getByIdAct };
