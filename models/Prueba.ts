const sequelize = require("../Config/Db")


let Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});


module.exports = Dummy;
