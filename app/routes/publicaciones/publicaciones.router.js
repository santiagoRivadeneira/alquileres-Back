module.exports = app => {

    const publicaciones = require("../../Controllers/publicaciones.controller")
    var router = require("express").Router();
  
    
    router.post("/", publicaciones.create );

    router.get("/obtener", publicaciones.obtener );
  
  
    app.use('/api/publicaciones', router);
    
  };
  
  