const {
  createHotel,
  getAllHotels,
  getManyHotels,
  updateHotel,
} = require("../controllers/hotel/hotel.controller");

const router = require("express").Router();

router.post("/createHotel", createHotel);
router.get("/allHotels", getAllHotels);
router.get("/manyHotels", getManyHotels);
router.put("/:id", updateHotel);

module.exports = router;
