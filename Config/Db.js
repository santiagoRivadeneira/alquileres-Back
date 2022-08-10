
const { async } = require("@firebase/util");
const Sequelize = require("sequelize");



try {

    exports.connection = async function() { 

        new Sequelize("duenoDirecto", "root" , "root", {
            dialect: 'mysql',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
            },
            port: 3306
        });
        //verificacion
    
    
        await sequelize
        .authenticate()
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch(error => {
            throw error;
        });
    }

} catch (error) {
    console.log(error)
}

 


 