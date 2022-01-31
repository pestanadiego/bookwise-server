const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Hotel = sequelize.define("hotel", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name_hotel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manager: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  nro_hab: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Hotel;
