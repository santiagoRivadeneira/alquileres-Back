module.exports = app => {

    const propiedades = require("../../Controllers/propiedades.controller")
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", propiedades.create );
  
  
    app.use('/api/propiedades', router);
    
  };
  