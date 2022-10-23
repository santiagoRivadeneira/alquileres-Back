const db = require("../models");
const Publicaciones = db.publicaciones;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;
var jwt = require('jsonwebtoken');


exports.create = (req, res) => {



  const token = req.headers.authorization.split(' ')[1]



  const payload = jwt.verify(token, 'secretKey')

  var userId = payload._id 

  const {
    precio,
    direccion,
    localidad,
    numeroAmb
  } = req.body

  


  const publicacion = {
    precio,
    direccion,
    localidad,
    numeroAmb,
    userId,
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