import connection from "../db/db.js";
import { v4 as uuidV4 } from "uuid";

async function signUpUser(req, res) {
  const { name, password, email } = res.locals.user;

  try {
    await connection.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );

    res.sendStatus(201);
  } catch (error) {
    return res.send(error).status(500);
  }
}

async function signInUser(req, res) {
  const user = res.locals.user;
  const token = uuidV4();

  try {
    let userId = await connection.query(
      "SELECT id FROM users WHERE email = $1",
      [user.email]
    );
    userId = userId.rows[0].id;

    await connection.query(
      "INSERT INTO sessions (id_user, token) VALUES ($1, $2)",
      [userId, token]
    );

    return res.send(token).status(200);
  } catch (error) {
    return res.send(error).status(500);
  }
}

export { signUpUser, signInUser };
