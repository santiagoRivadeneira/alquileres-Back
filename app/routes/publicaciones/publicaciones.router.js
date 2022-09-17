const utils = require("../../utils/utils")

module.exports = app => {

    const publicaciones = require("../../Controllers/publicaciones.controller")
    var router = require("express").Router();
  
    
    router.post("/" ,publicaciones.create );

    router.get("/obtener", utils.verificarToken, publicaciones.obtener );
  
  
    app.use('/api/publicaciones', router);
    
  };
  
  