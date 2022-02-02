const Hotel = require("../../models/hotel");
const Room = require("../../models/room");
const { successResponse, errorResponse } = require("../../helpers/index");

// CREATE
const createRoom = async (req, res) => {
  try {
    const { name, type, size, num_bed, limit, quantity, id_hotel } = req.body;
    console.log(req.body);
    const room = await Room.create({
      name: name,
      type: type,
      size: size,
      num_bed: num_bed,
      limit: limit,
      quantity: quantity,
      active: true,
      id_hotel: id_hotel,
    });
    return successResponse(req, res, room);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ALL (READ)
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      attributes: [
        "id",
        "name",
        "type",
        "size",
        "num_bed",
        "limit",
        "quantity",
        "id_hotel",
      ],
      where: { active: true },
    });
    return successResponse(req, res, rooms);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ONE/MANY
const getManyRooms = async (req, res) => {
  try {
    const { name } = req.body;
    const rooms = await Room.findAll({
      where: { name: name, active: true },
    });
    return successResponse(req, res, rooms);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET BY Id
const getRoomById = async (req, res) => {
  let id = req.params.id;
  try {
    const room = await Room.findAll({
      where: { id: id, active: true },
    });
    return successResponse(req, res, room);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// UPDATE
const updateRoom = async (req, res) => {
  try {
    let id = req.params.id;
    const room = await Room.update(req.body, { where: { id: id } });
    return successResponse(req, res, room);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// DELETE (LOGICO) *TO-DO*
const deleteLogicallyRoom = async (req, res) => {
  try {
    let id = req.params.id;
    const room = await Room.update({ active: false }, { where: { id: id } });
    return successResponse(req, res, room);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

module.exports = {
  createRoom,
  updateRoom,
  getRoomById,
  getManyRooms,
  getAllRooms,
  deleteLogicallyRoom,
};
