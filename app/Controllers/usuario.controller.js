const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request


  // Create a Tutorial
  const usuario = {
    userTipo: req.body.userTipo,
  };

  console.log(req.body)

  // Save Tutorial in the database
  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ocurrio un error al crear Usuario"
      });
    });
};

