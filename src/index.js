import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import registerRoute from "./routes/register.route.js"
import loginRoute from "./routes/login.route.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(registerRoute)
app.use(loginRoute)


const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running in port ${port}`))