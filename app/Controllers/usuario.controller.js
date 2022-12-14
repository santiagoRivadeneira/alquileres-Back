const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;
var jwt = require('jsonwebtoken');




//agregar nombre de usuario al registrarse 
// crear un usuario
exports.create =  async(req, res) => {

  const { email, contraseña, nombreUsuario } = req.body;



  const usuarios = {
    nombreUsuario: nombreUsuario,
    email : email,
    contraseña: contraseña,
    userTipo: "inquilino"
  }

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
  }










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

//obtener por Id
exports.findOne = async (req, res) => {

  const userId = req.params.id

  Usuario.findOne({
    where: {
        userId: userId,
    }
   }).then(user => {

    return res.json(user);
   });
};



//funciona correctamente
exports.logearse = async (req, res) => {


  let email = req.body.email;
  let contraseña = req.body.contraseña;


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

    return res.status(200).json({ token, userId:user.userId  })
    
   });

  }


  exports.modificar = async (req, res) => {
    const userId = req.params.id;
  
    const {
      email,
      contraseña
    } = req.body
    console.log(email, contraseña + "HOLAAAAAAAAAAAAAAAAAAAAAA")
  
  
  console.log(userId)
    await Usuario.update(
      {
        email,
        contraseña
      },
      {
        where: { userId: userId },
      }
    ).then(usuarioModificado => {
  
      return res.json(usuarioModificado);
     })
     .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hubo un problema"
      });
    });;
  };





