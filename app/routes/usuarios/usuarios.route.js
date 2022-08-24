const { check } = require('express-validator');

module.exports = app => {
    const usuario = require("../../Controllers/usuario.controller");
  
    var router = require("express").Router();
  

    router.post("/", 
    [
        check('usuario', 'Agrega un usuario válido'),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    
    usuario.create);


    router.get("/obtener", usuario.obtener);

    router.post("/login", usuario.logearse);




    app.use('/api/usuarios', router);
    
  }; 
  
