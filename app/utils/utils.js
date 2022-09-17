var jwt = require('jsonwebtoken');



exports.verificarToken = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send('No tiene autorizacion')
    }

    const token = req.headers.authorization.split(' ' )[1]

    if(token === null){
        return res.status(401).send('No tiene autorizacion')
    }

    //contenido dentro del token
    const payload = jwt.verify(token, 'secretKey')

    req.userId = payload._id


    next()

}