import Router from "express";
import { signInUser } from "../controllers/users.controller.js";
import {
  validateLogin,
  validateUserSchemmaLogin,
} from "../middlewares/users.middleware.js";

const router = Router();

router.post("/singin", validateUserSchemmaLogin, validateLogin, signInUser);

export default router;
