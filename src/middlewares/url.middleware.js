import urlSchemma from "../models/url.models.js";
import connection from "../db/db.js";

async function authenticationVerify(req, res, next) {
  const { token } = req.headers;

  const tokenExist = await connection.query(
    "SELECT * FROM sessions WHERE token = $1",
    [token]
  );

  if (tokenExist.rowCount === 0) {
    return res.sendStatus(401);
  }

  res.locals.auth = token;
  res.locals.tokenToVerifyUser = tokenExist.rows[0];

  next();
}

function urlSchemmaValidation(req, res, next) {
  const url = req.body;

  const { error } = urlSchemma.validate(url, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  res.locals.url = url;

  console.log(res.locals.url);

  next();
}

async function verifyId(req, res, next) {
  const { id } = req.params;

  try {
    const idSearch = await connection.query(
      "SELECT * FROM links WHERE id = $1",
      [id]
    );

    if (idSearch.rowCount === 0) {
      res.sendStatus(404);
    }

    res.locals.link = idSearch.rows[0];
    next();
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
}

async function verifyUrl(req, res, next) {
  const shortUrl = req.params;

  console.log(shortUrl);

  try {
    let existTinyUrl = await connection.query(
      "SELECT * FROM links WHERE short_link = $1",
      [shortUrl.shortUrl]
    );

    if (existTinyUrl.rowCount === 0) {
      return res.sendStatus(404);
    }

    res.locals.url = existTinyUrl.rows[0];

    next();
  } catch (error) {
    console.log("aqui");
    console.log(error);
    res.send(error).status(500);
  }
}

async function updateCount(req, res, next) {
  const link = res.locals.url;

  try {
    await connection.query("UPDATE links SET count = count+1 WHERE id = $1", [
      link.id,
    ]);
  } catch (error) {
    res.send(error).status(500);
  }

  next();
}

async function linkDeleteVerify(req, res, next) {
  const auth = res.locals.tokenToVerifyUser;
  const link = res.locals.link;


  if (auth.id_user != link.user_id) {
    return res.sendStatus(401);
  }

  res.locals.link = link.id;

  next();
}

export {
  urlSchemmaValidation,
  authenticationVerify,
  verifyId,
  verifyUrl,
  updateCount,
  linkDeleteVerify,
};
