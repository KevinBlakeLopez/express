const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  connectionString: process.env.CONNECTSTRING,
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM posts", (err, data) => 
    res.send(
        data.rows.reduce((string, cur) => {
            return string + cur.title;
        }, "")
    )
  );
});

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.send(result.rows);
  } catch (err) {
    res.send(err);
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM posts WHERE id = ${req.params.id}")
  }
});

app.post("/post", (req, res) => {
  res.send("you posted this!");
});

app.listen(5555, () => {
  console.log("http://localhost:5555");
});
