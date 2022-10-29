const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.CONNECTSTRING,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books;");
    res.send(
      result.rows
      // result.rows.reduce((string, cur) => {
      //   return string + cur.title;
      // }, "")
    );
  } catch (err) {
    res.send(err);
  }
});

app.get("/posts", async (req, res) => {
  console.log("posts");
  try {
    const result = await pool.query("SELECT * FROM books;");
    res.send(result.rows);
  } catch (err) {
    res.send(err);
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM books WHERE id = ${req.params.id}`
    );
    res.send(result.rows[0]);
  } catch (err) {
    res.send(err);
  }
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  try {
    const result = await pool.query(
      `INSERT INTO books(title, text_body) VALUES ('${req.body.title}', '${req.body.text_body}') RETURNING *;`
    );
    res.send(result.rows[0]);
  } catch (err) {
    res.send(err);
  }
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
