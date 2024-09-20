const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const corsOptions = {
  origin: `[${process.env.ORIGIN_ALLOWED}]`,
  credentials: true,
};
app.use(cors(corsOptions));

//Rate Limit
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests, please try again later.",
});

//Slow down
const speedLimiter = slowDown({
  windowMs: 1 * 60 * 1000, // 1 minutes
  delayAfter: 50, // allow 100 requests per 15 minutes
  delayMs: () => 500, // begin adding 500ms of delay per request above 100
});

app.use(speedLimiter);

//middleware rate limit
app.use(limiter);

// Routes
readdirSync("./routers").map((file) =>
  app.use("", require(`./routers/${file}`))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
