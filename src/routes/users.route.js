import Router from "express";
import { showUserData } from "../controllers/users.controller.js";
import { authenticationVerify } from "../middlewares/url.middleware.js";

const router = Router();

router.get("/users/me", authenticationVerify, showUserData);

export default router;
