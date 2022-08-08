// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../../Controllers/usuarioController');
const { check } = require('express-validator');

// Crea un usuario
// api/usuarios
app.post('/api/users', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
})



module.exports = router;