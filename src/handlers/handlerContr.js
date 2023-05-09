const contriesName = (req, res) => {
  try {
    return res.status(200).send("buscar por id");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const idContries = (req, res) => {
  const { id } = req.params;

  if (!id) throw Error(`el ${id} es requerido`);
  try {
    return res.status(200).send("buscar por nombre");
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { idContries, contriesName };
