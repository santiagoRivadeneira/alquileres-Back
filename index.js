const express = require("express");
//Db + sequelize
const { connection } = require("../DuenoDirectoBack/Config/Db");



 const app = express();
 const port = 3000;

/*
 
 const Sequelize = require('sequelize');

const path = 'mysql://user12:12user@localhost:3306/mydb';

const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})
 
 */



const initApp = async () => {
	console.log("Testing the database connection..");

	try {
		

		 console.log("la conexion  a la base de datos fue exitosa.");

	

		 app.listen(port, () => {
			 console.log(`Server is up and running at: http://localhost:${port}`);
		 });
	 } catch (error) {
		 console.error("Unable to connect to the database:", error.original);
	 }
 };
 


 initApp();