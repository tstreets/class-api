const path = require("path");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../views")));

const port = process.env.PORT || 3008;
process.env.BASE_URL =
  process.env.NODE_ENV === "DEV"
    ? `http://localhost:${port}`
    : process.env.BASE_URL;

app.use("/api/fall-24", require("./fall-24"));

app.listen(port);

if (process.env.NODE_ENV === "DEV")
  console.log(`Server running: http://localhost:${port}`);

module.exports = app;
