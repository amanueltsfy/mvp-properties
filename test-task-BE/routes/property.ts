import { Router } from "express";
import { getAllPropertiesWithPagination } from "../controller/property.controller";

const propertyRouter = Router();

propertyRouter.get("/", getAllPropertiesWithPagination);

export default propertyRouter;
