import connection from "../db/db.js";

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

export { signUpUser };
