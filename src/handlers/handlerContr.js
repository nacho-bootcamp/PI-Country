const allContries = (req, res) => {
  try {
    return res.status(200).send("informacion de todo los paises");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const idContries = (req, res) => {
  try {
    return res.status(200).send("buscar por id");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { allContries, idContries };
