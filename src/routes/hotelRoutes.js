const hotelController = require("../controllers/hotel/hotel.controller");

const router = require("express").Router();

router.post("/createHotel", hotelController.createHotel);
router.get("/allHotels", hotelController.getAllHotels);
router.get("/manyHotels", hotelController.getManyHotels);
router.put("/:id", hotelController.updateHotel);

module.exports = router;
