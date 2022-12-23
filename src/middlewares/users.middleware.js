import connection from "../db/db.js";
import { userSchemma, secondUserSchemma } from "../models/users.models.js";
import bcrypt from "bcrypt";

async function validateUserSchemma(req, res, next) {
  const user = req.body;

  const { error } = userSchemma.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}

async function validateUserSchemmaLogin(req, res, next) {
  const user = req.body;

  const { error } = secondUserSchemma.validate(user, { abortEarly: false });

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
      "SELECT email, password, id FROM users WHERE email = $1",
      [user.email]
    );

    const dataUser = existUser.rows[0];

    if (existUser.rowCount === 0 || dataUser.email !== user.email) {
      return res.sendStatus(401);
    }

    const correctPassword = bcrypt.compareSync(
      user.password,
      existUser.rows[0].password
    );

    if (!correctPassword) {
      return res.sendStatus(401);
    }

    const userAlreadyInSession = await connection.query(
      "SELECT * FROM sessions WHERE id_user = $1",
      [dataUser.id]
    );

    if (userAlreadyInSession.rowCount != 0) {
      return res.sendStatus(401);
    }
  } catch (error) {
    return res.sendStatus(500);
  }

  res.locals.user = user;
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

export {
  validateUserSchemma,
  validateUserSchemmaLogin,
  validateUser,
  validateLogin,
  validateToken,
};