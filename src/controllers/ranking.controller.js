import connection from "../db/db.js";

async function getRanking(req, res) {
  try {
    const rankingData = await connection.query(
      "SELECT u.id, u.name, COUNT(l.count) AS links_count, COALESCE(SUM(l.count),0) AS visits_count FROM users AS u LEFT JOIN links AS l ON l.user_id = u.id GROUP BY u.id ORDER BY COALESCE(SUM(l.count),0) DESC LIMIT 10;"
    );

        console.log(rankingData)

    return res.send(rankingData.rows).status(200);
  } catch (error) {
    return res.send(error).status(500);
  }
}

export default getRanking;
