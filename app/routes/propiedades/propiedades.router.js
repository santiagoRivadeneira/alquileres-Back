module.exports = app => {

    const propiedades = require("../../Controllers/propiedades.controller")
    var router = require("express").Router();
  
    // crear una publicacion
    router.post("/", propiedades.create );

    //obtener todas las publicaciones
    router.get("/obtener", propiedades.obtener);



    er.get("/obtener:id", propiedades.findOne);
  
  


    app.use('/api/propiedades', router);
    
  };
  