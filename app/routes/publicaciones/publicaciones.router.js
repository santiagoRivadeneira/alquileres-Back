module.exports = app => {

    const publicaciones = require("../../Controllers/propiedades.controller")
    var router = require("express").Router();
  
    
    router.post("/", propiedades.create );
  
  
    app.use('/api/publicaciones', router);
    
  };
  
  