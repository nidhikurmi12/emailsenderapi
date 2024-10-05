import { Router } from "express";
import UserRoutes from "./user.routes.js";


const route = Router();

route.use(UserRoutes);

export default route;
