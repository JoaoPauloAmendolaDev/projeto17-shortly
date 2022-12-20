import connection from "../db/db.js";
import userSchemma from "../models/users.models.js";

async function validateUser(req, res, next) {
  const user = req.body;

  if (user.password !== user.confirmPassword) {
    return res.sendStatus(422);
  }

  const { error } = userSchemma.validate(user, { abortEarly: false });

  if (error) {
    console.log(error);
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
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

async function validateLogin(req, res, next){
  


}

export { validateUser };
