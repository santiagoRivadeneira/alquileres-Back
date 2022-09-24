const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;
var jwt = require('jsonwebtoken');



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

     const token = jwt.sign({ _id: data.userId },  'secretKey')
     res.status(200).json({token});

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
      }
    }

   }).then(user => {

    if (!email || user == null) {
      return res.status(401).json({error: 'No existe el email'});
    }

    if (user.contraseña !== contraseña) {
      return res.status(401).json({error: 'contraseña Erronea'});
    }

    const token = jwt.sign({ _id: user.userId },  'secretKey');

    return res.status(200).json({ token })
    
   });
};




