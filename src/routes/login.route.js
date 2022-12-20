import Router from "express";
import { signInUser } from "../controllers/users.controller.js";
import {
  validateUser,
  validateUserSchemma,
  validateLogin,
} from "../middlewares/users.middleware.js";


const router = Router();

router.post("/singin", validateUserSchemma, validateLogin, signInUser);


export default router