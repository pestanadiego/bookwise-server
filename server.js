const hotelRoutes = require("./src/routes/hotelRoutes");

const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "http://localhost:8081",
};

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/hotel", hotelRoutes);

// Puerto
const PORT = 8080;

// Server
app.listen(PORT, () => {
  console.log("Servidor en: ", PORT);
});

// Testeo API
app.get("/", (req, res) => {
  res.json({ message: "prueba" });
});
