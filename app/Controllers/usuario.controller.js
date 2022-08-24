const { usuarios } = require("../models");
const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

// crear un usuario
exports.create =  async(req, res) => {

  const { email, contraseña } = req.body;

  const usuarios = { 
    email : email,
    contraseña: contraseña
  }

  console.log(req.body)

  //funciona correctamente
  await Usuario.create(usuarios)
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


 //funciona correctamente
 exports.obtener = (req, res) => {
  Usuario.findAll()
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



//funciona correctamente
exports.logearse = async (req, res) => {


  const email = req.body.email;
  const contraseña = req.body.contraseña;

  Usuario.findOne({
    where: {
      [Op.and] : {
        email: email,
        contraseña: contraseña
      }
    }
   }).then(user => {
    if (!user) {
     return res.status(404).json({error: 'No existe el usuario'});
    }
    return res.json(user);
   });
};



 
