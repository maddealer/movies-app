const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "Mongo DB connection error"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", movieRouter);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
