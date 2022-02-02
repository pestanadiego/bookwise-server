const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://wmrtjdeltbwgdy:83de1d724f26e574bc9e957b937436ddcd0ca6794aa50b232f20832865a6cf0d@ec2-34-233-157-9.compute-1.amazonaws.com:5432/dfsohetjti5e2c",
  {
    host: "ec2-34-233-157-9.compute-1.amazonaws.com",
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

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
