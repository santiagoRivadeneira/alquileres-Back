module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define("usuarios", {
	userId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	userTipo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
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
