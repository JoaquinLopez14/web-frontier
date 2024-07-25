require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;
const connection = require("./db.cjs");
const updateInterval = 60000;

app.use(cors());
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

// Funcion para obtener los weekly loots del enlance ---------------------------------------------------
const catchWeeklyLoots = async (userID) => {
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

app.get("/update-weekly-loots", async (req, res) => {
  try {
    connection.query(
      "SELECT user_id FROM user_data",
      async (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          for (const user of results) {
            const weeklyLoots = await catchWeeklyLoots(user.user_id);
            connection.query(
              "UPDATE user_data SET weekly_loots = ? WHERE user_id = ?",
              [weeklyLoots, user.user_id],
              (err) => {
                if (err) {
                  console.error(
                    `Error updating weekly loots for user ${user.user_id}:`,
                    err
                  );
                }
              }
            );
          }
          res.send("Weekly loots updated");
        }
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

setInterval(async () => {
  try {
    await axios.get("http://localhost:3000/update-weekly-loots");
    console.log("Weekly loots updated correctly");
  } catch (error) {
    console.error("Error updating weekly loots:", error);
  }
}, updateInterval);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
