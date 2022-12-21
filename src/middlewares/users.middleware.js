import connection from "../db/db.js";
import userSchemma from "../models/users.models.js";

async function validateUserSchemma(req, res, next) {
  const user = req.body;

  if (!user.name || typeof user.name !== "string") {
    return res.sendStatus(422);
  }

  const { error } = userSchemma.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}

async function validateUser(req, res, next) {
  const user = req.body;

  if (user.password !== user.confirmPassword) {
    return res.sendStatus(422);
  }

  const userExists = await connection.query(
    "SELECT * FROM users WHERE email = $1",
    [user.email]
  );

  if (userExists.rowCount !== 0) {
    return res.sendStatus(409);
  }

  res.locals.user = user;
  next();
}

async function validateLogin(req, res, next) {
  const user = req.body;

  try {
    const existUser = await connection.query(
      "SELECT email, password FROM users WHERE email = $1",
      [user.email]
    );

    const dataUser = existUser.rows[0];

    if (
      existUser.rowCount === 0 ||
      dataUser.email !== user.email ||
      dataUser.password !== user.password
    ) {
      return res.sendStatus(401);
    }
  } catch (error) {
    return res.sendStatus(500);
  }

  res.locals.user = user;
  console.log("fui pro next 123");
  next();
}

async function validateToken(req, res, next) {
  const token = req.headers;

  const isValidToken = await connection.query(
    "SELECT * FROM sessions WHERE token = $1",
    [token]
  );

  if (isValidToken.rowCount === 0) {
    return res.sendStatus(401);
  }

  next();
}

export { validateUserSchemma, validateUser, validateLogin, validateToken };
