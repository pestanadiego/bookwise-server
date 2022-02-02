const sequelize = require("../config/sequelize");

const Hotel = require("../models/hotel");
const Room = require("../models/room");

// Relaciones de los modelos
Hotel.hasMany(Room, {
  foreignKey: "id_hotel",
});

Room.belongsTo(Hotel, {
  foreignKey: "id_hotel",
});

// Autenticación y sync
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
