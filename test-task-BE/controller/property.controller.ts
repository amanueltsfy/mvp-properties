import { Request, Response } from "express";
import Property from "../models/Property";
import { Op } from "sequelize";
import { PropertyPaginationQuery } from "../interface/property.interface";

export const getAllPropertiesWithPagination = async (
  req: Request<{}, {}, {}, PropertyPaginationQuery>,
  res: Response
) => {
  const {
    type,
    order,
    location,
    maxPrice,
    bedrooms,
    bathrooms,
    page = 1,
    limit = 10
  } = req.query;
  const pageNumber = Math.max(parseInt(page as string), 1);
  const pageSize = Math.max(parseInt(limit as string), 1);
  const filters: any = {};

  if (location) {
    filters.location = { [Op.like]: `%${String(location)}%` };
  }

  if (order) {
    filters.order = String(order);
  }

  if (type) {
    filters.type = String(type);
  }

  if (maxPrice) {
    filters.price = { [Op.lte]: parseFloat(maxPrice as string) };
  }
  if (bedrooms) {
    filters.bedrooms = parseInt(bedrooms as string);
  }
  if (bathrooms) {
    filters.bathrooms = parseInt(bathrooms as string);
  }

  try {
    const { count, rows } = await Property.findAndCountAll({
      where: filters,
      limit: pageSize,
      offset: (pageNumber - 1) * pageSize
    });

    res.json({
      total: count,
      totalPages: Math.ceil(count / pageSize),
      currentPage: pageNumber,
      pageSize,
      properties: rows
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
