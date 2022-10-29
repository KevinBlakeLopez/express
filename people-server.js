const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());

const pool = new Pool({
  connectionString: process.env.CONNECTSTRING,
});

app.get("/", (req, res) => {
  res.send("<h1>people database</h1>");
});

app.get("/people", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM people");
    res.send(response.rows);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
