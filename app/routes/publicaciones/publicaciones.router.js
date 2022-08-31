module.exports = app => {

    const publicaciones = require("../../Controllers/propiedades.controller")
    var router = require("express").Router();
  
    
    router.post("/", publicaciones.create );
  
  
    app.use('/api/publicaciones', router);
    
  };
  
  