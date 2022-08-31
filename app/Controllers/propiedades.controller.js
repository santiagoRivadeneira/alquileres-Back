const db = require("../models");
const Propiedades = db.propiedades;


const Op = db.Sequelize.Op;

// crear un usuario
exports.create = (req, res) => {

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

  Usuario.findOne({
    where: {
      [Op.and] : {
        propiedId: propiedId,
      }
    }
   }).then(user => {
    if (!propiedId) {
     return res.status(404).json({error: 'no existe la propiedad'});
    }
    return res.json(user);
   });
};




