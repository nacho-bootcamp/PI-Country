const {
  createActivity,
  getAllActivities,
  getByIdActiviti,
  putActivities,
  deleteActivity,
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
    res.status(500).send(error.message);
  }
};
const putActiviti = async (req, res) => {
  const { id, name, difficulty, duration, season } = req.body;
  try {
    const putActivity = await putActivities(
      id,
      name,
      difficulty,
      duration,
      season
    );
    if (!id) throw Error("the mandatory the id");
    return res.status(200).json(putActivity);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteActiviti = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw Error("there is no such activity");
    const deleteAct = await deleteActivity(id);
    res.status(200).send("the activity was successfully deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getActiviti,
  postActiviti,
  getByIdAct,
  putActiviti,
  deleteActiviti,
};
