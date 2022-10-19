const db = require("../models");
const Propiedades = db.propiedades;
var jwt = require('jsonwebtoken');



const Op = db.Sequelize.Op;

//un propietario crea sus publicaciones y se le muestran



//luego de esto en la parte de publicar va a poder elegir sus propiedades y podra publicar una de sus propiedades
//ya creadas de esa misma persona 

// crear un usuario


exports.create = (req, res) => {


  const token = req.headers.authorization.split(' ')[1]



  const payload = jwt.verify(token, 'secretKey')

  var userId = payload._id 


//tiene 14
  const {
    tipoProp,
    precio, 
    direccion, 
    localidad, 
    numeroDirec, 
    expensas, 
    departamento, 
    planta,  
    cantAmbientes, 
    ubicacion,
    cantBaños,
    Wifi,
    gasDeRed,
    cochera
  } = req.body

  console.log(req.body)

  // crear un usuario
  const propiedad = {
    //obligatoreos 
    tipoProp: tipoProp,
    precio: precio,
    direccion: direccion,
    localidad: localidad,
    //puede ser nulos
    numeroDirec: numeroDirec,
    expensas: expensas,
    departamento: departamento,
    planta: planta,
    cantAmbientes: cantAmbientes,
    ubicacion: ubicacion,
    cantBaños: cantBaños,
    Wifi: Wifi,
    gasDeRed: gasDeRed,
    cochera: cochera,
    userId
  };


  // guardar usuario en la base(funciona correctamente, falta agregar logica de negocio)
  Propiedades.create(propiedad)
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
  Propiedades.findAll()
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




exports.findOne = async (req, res) => {
  const propiedId = req.params.id;
  console.log(propiedId)

  Propiedades.findOne({
    where: {
        propiedId: propiedId,
    }
   }).then(propiedad => {

    return res.json(propiedad);
   });
};


//los filtros funcionan
exports.filtros = async (req, res) => {


  const tipoProp = req.body.tipoProp;
  const localidad = req.body.localidad;
  
  console.log(tipoProp, localidad)

  Propiedades.findAll({
    where: {
      [Op.and] : {
        tipoProp: tipoProp,
        localidad: localidad
      }
    }
   }).then(prop => {
    if (!prop) {
     return res.status(404).json({error: 'No existe el la propiedad'});
    }
    console.log(prop)
    return res.json(prop);
   });
};


//queda por ver

exports.modificar = async (req, res) => {
  const propiedId = req.params.id;
  const {
    tipoProp,
    precio, 
    direccion, 
    localidad, 
    numeroDirec, 
    expensas, 
    departamento, 
    planta,  
    cantAmbientes, 
    ubicacion,
    cantBaños,
    Wifi,
    gasDeRed,
    cochera
  } = req.body

  Propiedades.update({
    where: {
      propiedId: propiedId,
      /*
      tipoProp: tipoProp,
      precio: precio,
      direccion: direccion,
      localidad: localidad,
      numeroDirec: numeroDirec,
      expensas: expensas,
      departamento: departamento,
      planta: planta,
      cantAmbientes: cantAmbientes,
      ubicacion: ubicacion,
      cantBaños: cantBaños,
      Wifi: Wifi,
      gasDeRed: gasDeRed,
      cochera: cochera,
      */
    }
   }).then(propiedadModificada => {

    return res.json(propiedadModificada);
   });
};





