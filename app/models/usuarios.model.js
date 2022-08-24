
 const { DataTypes, Sequelize } = require("sequelize");

 /*
 module.exports = (sequelize) => {
	let Usuario = sequelize.define("Usuarios",
	{
	   user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		user_tipo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		
		user_telefono: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		user_pass: {
		   type: DataTypes.STRING,
		   allowNull: true,
	   },
	   user_name: {
		   type: DataTypes.STRING,
		   allowNull: true,
	   },
	   user_descripcion: {
		   type: DataTypes.STRING,
		   allowNull: true,
	   },
	 
	},
);
 Usuario;
 
}
*/

module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define("usuarios", {
	userId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},/*
	userTipo: {
		type: Sequelize.STRING,
		allowNull: false,
	},*/
	email: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	contraseña: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	});
	return Usuarios;
  };
