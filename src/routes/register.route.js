import { Router } from "express";
import { signUpUser } from "../controllers/users.controller.js";
import { validateUser } from "../middlewares/users.middleware.js";

const router = Router();

router.post("/singin", validateUser, signUpUser);

export default router;
