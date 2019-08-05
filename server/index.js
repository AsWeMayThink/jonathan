const express = require("express");
const path = require("path");
const logger = require("morgan");

const greatest = require("./greatest-albums");

const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/greatest-albums", (req, res) => {
  res.json(greatest);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
