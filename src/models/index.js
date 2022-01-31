const sequelize = require("../config/sequelize");

const Hotel = require("../models/hotel");
const Room = require("../models/room");

// Relaciones de los modelos
Hotel.hasMany(Room, {
  foreignKey: "id_hotel",
});

sequelize
  .sync({ force: false })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
