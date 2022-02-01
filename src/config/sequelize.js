const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://gpicjwtppfvilx:199938607cdb6a05d899925440171e50eb261c8a60a5759ef682c23013edb9bb@ec2-52-45-183-77.compute-1.amazonaws.com:5432/d76uj7it6k05n0",
  {
    host: "ec2-52-45-183-77.compute-1.amazonaws.com",
    protocol: "postgres",
    port: 5432,
    dialect: "postgres",
    ssl: true,
    logging: true,
    dialectOptions: {
      decimalNumbers: true,
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<< YOU NEED THIS
      },
    },
  }
);

module.exports = sequelize;
