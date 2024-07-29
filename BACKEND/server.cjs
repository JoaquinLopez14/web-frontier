require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const connection = require("./db.cjs");
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "https://esdechillbro.netlify.app/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let lastUpdate = Date.now();

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

// Ruta para manejar el envio de datos del formulario

app.post("/submit-form", async (req, res) => {
  const { ign, dfprofiler, country, lenguage } = req.body;
  const query =
    "INSERT INTO form_data (ign, df_profiler, country, lenguage) VALUES (?, ?, ?, ?)";

  try {
    await connection
      .promise()
      .query(query, [ign, dfprofiler, country, lenguage]);
    res.send("Formulario enviado exitosamente");
  } catch (error) {
    console.error("Error ejecutando la consulta:", error);
    res.status(500).send("Error al enviar el formulario");
  }
});

// Función para obtener los weekly loots del enlace
const catchWeeklyLoots = async (userID) => {
  try {
    const response = await axios.get(
      `https://fairview.deadfrontier.com/onlinezombiemmo/get_values.php?userID=${userID}`
    );
    const data = response.data;
    const match = data.match(/df_loots_weekly=(\d+)/);
    if (match) {
      return match[1];
    } else {
      throw new Error("Weekly loots not found in response");
    }
  } catch (error) {
    console.error("Error fetching weekly loots:", error);
    throw error;
  }
};

const updateWeeklyLoots = async () => {
  try {
    const [results] = await connection
      .promise()
      .query("SELECT user_id FROM user_data");
    const updatePromises = results.map(async (user) => {
      try {
        const weeklyLoots = await catchWeeklyLoots(user.user_id);
        await connection
          .promise()
          .query("UPDATE user_data SET weekly_loots = ? WHERE user_id = ?", [
            weeklyLoots,
            user.user_id,
          ]);
      } catch (error) {
        console.error(`Error updating user ${user.user_id}:`, error);
      }
    });
    await Promise.all(updatePromises);
    lastUpdate = Date.now();
    console.log("Weekly loots updated");
  } catch (error) {
    console.error("Error updating weekly loots:", error);
  }
};

setInterval(updateWeeklyLoots, 3600000);

app.get("/last_update", (req, res) => {
  res.json({ lastUpdate: new Date(lastUpdate).toISOString() });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
