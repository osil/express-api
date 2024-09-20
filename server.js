const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
readdirSync("./routers").map((file) =>
  app.use("/api", require(`./routers/${file}`))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
