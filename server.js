const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("base de datos sincronizada");
  })
  .catch((err) => {
    console.log("error al sincronzar base: " + err.message);
  });



// ruta principal 
app.get("/", (req, res) => {
  res.json({ message: "bienvenido" });
});

require("./app/routes/usuarios/usuarios.route")(app);

require("./app/routes/propiedades/propiedades.router")(app);

require("./app/routes/publicaciones/publicaciones.router")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server corriendo en el puerto ${PORT}.`);
});

