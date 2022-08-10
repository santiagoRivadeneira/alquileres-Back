// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuario = require('../../Controllers/usuarioController');

router.post('/create', 
    usuario.createUser
);


module.exports = router;


