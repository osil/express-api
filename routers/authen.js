const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");

router.get("/authen", authenController.authen);

module.exports = router;
