const express = require("express");
const app = express();

app.get("/hello", (req, res) => res.json("Hello World!"));
app.get("/hello/:name", (req, res) => res.json(`Hello ${req.params.name}!`));

module.exports = app;
