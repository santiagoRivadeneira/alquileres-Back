var jwt = require('jsonwebtoken');
const multer  = require('multer')




exports.verificarToken = (req, res, next) => {

    try {
        if(!req.headers.authorization){
            return res.status(401).send('No tiene autorizacion')
        }
    
        const token = req.headers.authorization.split(' ')[1]
    
        if(token === null){
            return res.status(401).send('No tiene autorizacion')
        }
    
        //contenido dentro del token
        const payload = jwt.verify(token, 'secretKey')

        if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}

    
        req.userId = payload._id
    

        next()
        
    } catch (error) {
        	//console.log(e)
		return res.status(401).send('Unauhtorized Request');
    }


}




