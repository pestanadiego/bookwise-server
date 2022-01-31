import Hotel from "../../models/hotel";
import { successResponse, errorResponse } from "../helpers/index";

// CREATE
export const createHotel = async (req, res) => {
  try {
    const { name_hotel, address, manager, rating } = req.body;
    const hotel = await Hotel.create({
      name_hotel: name_hotel,
      address: address,
      manager: manager,
      rating: rating,
      nro_hab: 0,
      active: true,
    });
    return successResponse(req, res, hotel);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ALL (READ)
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      attributes: ["name", "address", "manager", "rating", "nro_hab"],
      where: { active: true },
    });
    return successResponse(req, res, hotels);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// GET ONE/MANY
export const getManyHotels = async (req, res) => {
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
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.update(req.body, { where: { id: id } });
    return successResponse(req, res, hotel);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// DELETE (LOGICO) *TO-DO*
