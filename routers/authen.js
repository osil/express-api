const express = require("express");
const router = express.Router();
const { authen } = require("../controllers/authenController");

router.get("/authen", authen);

module.exports = router;
