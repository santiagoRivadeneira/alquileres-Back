const express = require("express");
const cors = require("cors")




 const app = express();
 const port = 3000;



//json parse
 app.use( express.json({ extended: true }));


 //cors
 app.use(cors());


 app.use('/api/', require('./routes/usuarios/usuarios.route'));





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