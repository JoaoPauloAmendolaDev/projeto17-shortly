import Router from "express"
import { validateUser } from "../middlewares/users.middleware.js"

const router = Router()

router.post("/singup", validateUser, validateLogin)