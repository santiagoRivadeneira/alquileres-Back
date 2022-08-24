module.exports = (sequelize, Sequelize) => {
	const Propiedades = sequelize.define("propiedades", {
	  publiId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	  },
      amoblado: {
        type: Sequelize.String,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.String,
        allowNull: false,
      },
      requisitos: {
        type: Sequelize.String,
        allowNull: false,
      },
      disponibilidad: {
        type: Sequelize.String,
        allowNull: false,
      }
	});
	return Propiedades;
  };
