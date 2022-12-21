import { nanoid } from "nanoid";
import connection from "../db/db.js";

async function urlTransform(req, res) {
  const { url } = res.locals.url;
  const { token } = req.headers;

  let newUrl = nanoid(8);

  try {
    const firstTime = await connection.query(
      "SELECT id_user FROM sessions WHERE token = $1 ",
      [token]
    );

    const userId = firstTime.rows[0].id_user;

    await connection.query(
      "INSERT INTO links (user_id, big_link, short_link, count) VALUES ($1, $2, $3, $4) ",
      [userId, url, newUrl, 0]
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
}

function getUrlList(req, res) {
  const urls = res.locals.link;

  res.send(urls).status(200);
}

function goToSite(req, res) {
  const url = res.locals.url;

  res.redirect(200, url.big_link);
}

export { urlTransform, getUrlList, goToSite };
