import { Router } from "express";
import { signUpUser } from "../controllers/users.controller.js";
import {
  validateUser,
  validateUserSchemma,
} from "../middlewares/users.middleware.js";

const router = Router();

router.post("/singup", validateUserSchemma, validateUser, signUpUser);

export default router;
