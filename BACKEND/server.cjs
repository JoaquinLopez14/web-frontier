require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.DB_PORT || 3000;

app.use(cors());

const connection = require("./db.cjs");

app.use(express.static(path.join(__dirname, "dist")));

app.get("/user_data", (req, res) => {
  connection.query("SELECT * FROM user_data", (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
