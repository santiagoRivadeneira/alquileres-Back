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
		unique: {
            msg: 'el usuario ya existe'
        },
	},
	nombreUsuario: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	contraseña: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	fotoPerfil: {
		type: Sequelize.STRING
	},
	});
	return Usuarios;
  };
