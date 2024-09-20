const express = require("express");
const router = express.Router();
const { students } = require("../controllers/studentController");

router.get("/students", students);

module.exports = router;
