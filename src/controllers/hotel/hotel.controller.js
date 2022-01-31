import Hotel from "../models/room";
import { successResponse, errorResponse } from "../helpers/index";

export const createHotel = async (req, res) => {
  try {
    const { name_hotel, address, manager, rating, nro_hab } = req.body;
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
