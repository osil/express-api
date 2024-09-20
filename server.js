const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const corsOptions = {
  origin: process.env.ORIGIN_ALLOWED,
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
readdirSync("./routers").map((file) =>
  app.use("", require(`./routers/${file}`))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
