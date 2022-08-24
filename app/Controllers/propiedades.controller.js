const db = require("../models");
const Propiedades = db.Propiedades;
const Op = db.Sequelize.Op;

// crear un usuario
exports.create = (req, res) => {

  // crear un usuario
  const propiedad = {
    tipoProp: req.body.tipoProp,
  };


  // guardar usuario en la base
  Propiedades.create(propiedad)
    .then(data => {
      res.send(data);
      res.send("propiedad crearda exitosamente")
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ocurrio un error al crear Usuario"
         
      });
     
    });
};




