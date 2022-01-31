const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookwise", "postgres", "28281731", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

module.exports = sequelize;
