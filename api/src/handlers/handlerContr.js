const {
  getById,
  getByName,
  getCountries,
} = require("../controllers/controllerContr");

const contriesName = async (req, res) => {
  const { name } = req.query;
  try {
    const getCountriesName = name
      ? await getByName(name)
      : await getCountries();
    console.log(getCountriesName);

    return res.status(200).json(getCountriesName);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const idContries = async (req, res) => {
  const { id } = req.params;
  try {
    const getCountriesId = await getById(id);
    return res.status(200).json(getCountriesId);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { idContries, contriesName };
