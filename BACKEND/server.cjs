require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const connection = require("./db.cjs");

let lastUpdate = Date.now();

const updateWeeklyLoots = async () => {
  try {
    const [results] = await connection
      .promise()
      .query("SELECT user_id FROM user_data");
    for (const user of results) {
      const weeklyLoots = await getWeeklyLoots(user.user_id);
      await connection
        .promise()
        .query("UPDATE user_data SET weekly_loots = ? WHERE user_id = ?", [
          weeklyLoots,
          user.user_id,
        ]);
    }
    lastUpdate = Date.now();
    console.log("Weekly loots updated");
  } catch (error) {
    console.error("Error updating weekly loots:", error);
  }
};

setInterval(updateWeeklyLoots, 3600000);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/user_data", async (req, res) => {
  try {
    const [results] = await connection
      .promise()
      .query("SELECT * FROM user_data");
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/last_update", (req, res) => {
  res.json({ lastUpdate });
});

const getWeeklyLoots = async (userID) => {
  try {
    const response = await axios.get(
      `https://fairview.deadfrontier.com/onlinezombiemmo/get_values.php?userID=${userID}`
    );
    const data = response.data;
    const weeklyLoots = data.match(/df_loots_weekly=(\d+)/)[1];
    return weeklyLoots;
  } catch (error) {
    console.error("Error fetching weekly loots:", error);
    throw error;
  }
};

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
