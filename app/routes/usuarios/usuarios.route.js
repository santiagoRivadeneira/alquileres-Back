module.exports = app => {
    const usuario = require("../../Controllers/usuario.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usuario.create);
  
  
    app.use('/api/usuarios', router);
  };
  