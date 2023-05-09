const { getById } = require("../controllers/controllerContr");

const contriesName = (req, res) => {
  const { name } = req.query;

  if (!id) throw Error(`el ${id} es requerido`);
  try {
    return res.status(200).send("buscar por nombre");
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
