const db = require("../models");
const Publicaciones = db.publicaciones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  const {
    precio,
    direccion,
    localidad,
    numeroAmb
  } = req.body

  console.log(req.body)


  const publicacion = {
    precio,
    direccion,
    localidad,
    numeroAmb
  };


  Publicaciones.create(publicacion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ocurrio un error al crear una publicaion"
         
      });
     
    });
};





exports.obtener = (req, res) => {
  Publicaciones.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hubo un problema"
      });
    });
};