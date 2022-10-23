module.exports = app => {

    const propiedades = require("../../Controllers/propiedades.controller")
    var router = require("express").Router();
  
    // crear una publicacion
    router.post("/", propiedades.create );

    //obtener todas las publicaciones
    router.get("/obtener", propiedades.obtener);



    router.get("/obtener/:id", propiedades.findOne);



    router.put("/modificar/:id", propiedades.modificar);


    
    router.post("/filtros", propiedades.filtros);


    router.delete("/eliminar/:id", propiedades.delete);

  
  


    app.use('/api/propiedades', router);
    
  };
  