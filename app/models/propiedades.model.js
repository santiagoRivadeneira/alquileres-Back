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
      },/*
      expensas: {
        type: Sequelize.INTEGER,
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
        allowNull: false, 
      },
      departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      planta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cantAmbientes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ubicacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /*ver como se van a trabajar las fotos
      fotos: {
        type: Sequelize.File,
        allowNull: false,
      }
      
      cantBaños:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Wifi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gasDeRed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cochera: {
        type: Sequelize.STRING,
        allowNull: false,
      }*/
	});
	return Propiedades;
  };
