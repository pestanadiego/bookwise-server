const {
  createHotel,
  getHotelById,
  getAllHotels,
  getManyHotels,
  updateHotel,
  deleteLogicallyHotel,
} = require("../controllers/hotel/hotel.controller");

const router = require("express").Router();

router.post("/createHotel", createHotel);
router.get("/allHotels", getAllHotels);
router.get("/searchHotel/:id", getHotelById);
router.post("/manyHotels", getManyHotels);
router.put("/:id", updateHotel);
router.put("/delete/:id", deleteLogicallyHotel);

module.exports = router;
