const Hotel = require("../../models/hotel");
const Room = require("../../models/room");
const { successResponse, errorResponse } = require("../../helpers/index");

// CREATE
const createHotel = async (req, res) => {
  try {
    const { name_hotel, address, manager, rating } = req.body;
    console.log(req.body);
    const hotel = await Hotel.create({
      name_hotel: name_hotel,
      address: address,
      manager: manager,
      rating: rating,
      active: true,
    });
    return successResponse(req, res, hotel);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ALL (READ)
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      attributes: [
        "id",
        "name_hotel",
        "address",
        "manager",
        "rating",
        "active",
      ],
      where: { active: true },
    });
    return successResponse(req, res, hotels);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ONE/MANY
const getManyHotels = async (req, res) => {
  try {
    const { name_hotel } = req.body;
    const hotels = await Hotel.findAll({
      where: { name_hotel: name_hotel, active: true },
    });
    return successResponse(req, res, hotels);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// UPDATE
const updateHotel = async (req, res) => {
  try {
    let id = req.params.id;
    const hotel = await Hotel.update(req.body, { where: { id: id } });
    return successResponse(req, res, hotel);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// DELETE (LOGICO) *TO-DO*
const deleteLogicallyHotel = async (req, res) => {
  try {
    let id = req.params.id;
    const hotel = await Hotel.update({ active: false }, { where: { id: id } });
    return successResponse(req, res, hotel);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  getManyHotels,
  getAllHotels,
  deleteLogicallyHotel,
};
