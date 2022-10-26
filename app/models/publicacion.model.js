module.exports = (sequelize, Sequelize) => {
	const Publicaciones = sequelize.define("publicaciones", {
	  publiId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	  },
    precio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localidad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroAmb: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'userId'
        }
    },
    fotoPubli: {
      type: Sequelize.STRING
    },
	});
	return Publicaciones;
  };
