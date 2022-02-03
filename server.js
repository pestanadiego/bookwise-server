const hotelRoutes = require("./src/routes/hotelRoutes");
const roomRoutes = require("./src/routes/roomRoutes");

const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
};

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/hotel", hotelRoutes);
app.use("/api/room", roomRoutes);

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
