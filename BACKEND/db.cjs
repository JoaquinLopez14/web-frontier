require("dotenv").config();
let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("Error en la conexión: " + err.stack);
    return;
  }
  console.log("Conectado como id " + connection.threadId);
});

module.exports = connection;
