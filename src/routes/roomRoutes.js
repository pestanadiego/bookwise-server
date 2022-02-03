const {
  createRoom,
  getRoomById,
  getAllRooms,
  getManyRooms,
  updateRoom,
  deleteLogicallyRoom,
} = require("../controllers/room/room.controller");

const router = require("express").Router();

router.post("/createRoom", createRoom);
router.get("/allRooms", getAllRooms);
router.get("/searchRoom/:id", getRoomById);
router.get("/manyRooms", getManyRooms);
router.put("/:id", updateRoom);
router.put("/delete/:id", deleteLogicallyRoom);

module.exports = router;
