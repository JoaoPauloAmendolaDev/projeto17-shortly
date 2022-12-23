import connection from "../db/db.js";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

async function signUpUser(req, res) {
  let { name, password, email } = res.locals.user;

  password = bcrypt.hashSync(password, 10);

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

async function showUserData(req, res) {
  const user = res.locals.tokenToVerifyUser;

  try {
    const data = await connection.query(
      "SELECT u.id, u.name, SUM(l.count) AS visit_count, (SELECT json_agg(links) FROM ( SELECT l.id, l.short_link, l.big_link, l.count FROM links AS l WHERE l.user_id = u.id ) links ) AS shortened_urls FROM users AS u JOIN links AS l ON l.user_id = u.id WHERE user_id = $1 GROUP BY u.id;",
      [user.id_user]
    );

    return res.send(data.rows[0]).status(200);
  } catch (error) {
    console.log("deu ruim", error);
    return res.send(error).status(500);
  }
}

export { signUpUser, signInUser, showUserData };
