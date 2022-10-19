module.exports = (sequelize, Sequelize) => {
	const Propiedades = sequelize.define("propiedades", {
	  propiedId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	  },
      tipoProp: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      localidad:{
        type: Sequelize.STRING,
        allowNull: false, 
      },

      numeroDirec: {
        type: Sequelize.INTEGER,
      },
      expensas: {
        type: Sequelize.INTEGER,
      },
      departamento: {
        type: Sequelize.STRING,
      },
      planta: {
        type: Sequelize.STRING,
      },
      cantAmbientes: {
        type: Sequelize.INTEGER,
      },
      ubicacion: {
        type: Sequelize.STRING,
      },
      cantBaños:{
        type: Sequelize.INTEGER,
      },
      Wifi: {
        type: Sequelize.STRING,
      },
      gasDeRed: {
        type: Sequelize.STRING,
      },
      cochera: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'userId'
        }
    }
      /*
      ver como se van a trabajar las fotos
      fotos: {
        type: Sequelize.File,
        allowNull: false,
      }
      */
	});


	return Propiedades;
  };
