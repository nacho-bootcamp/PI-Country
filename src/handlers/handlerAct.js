const getActiviti = (req, res) => {
  try {
    return res.status(200).send("informacion de todo los actividades");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const postActiviti = (req, res) => {
  try {
    return res.status(200).send("se crea otra actividad");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getActiviti, postActiviti };
