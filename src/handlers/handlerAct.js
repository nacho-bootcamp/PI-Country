const { Activity, Country } = require("../database/db");

const getActiviti = async (req, res) => {
  const allAct = await Activity.findAll();

  try {
    return res.status(200).json(allAct);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const postActiviti = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  const createAct = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const countriesList = await Country.findAll({
    where: { id: countries },
  });

  await createAct.addCountries(countriesList);

  try {
    return res.status(200).json(createAct);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getActiviti, postActiviti };
