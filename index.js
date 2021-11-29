const express = require("express");
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from LCO</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "ganeshbirajdar09",
    followers: 66,
    follows: 70,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const face = {
    username: "Ganesh Birajdar",
    followers: 100,
    follows: 89,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(face);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedin = {
    username: "Ganesh",
    followers: 77,
    follows: 90,
    date: format.asString("dd-MM-yyyy", new Date()),
  };
  res.status(200).json(linkedin);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
