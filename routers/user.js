const express = require("express");
const router = express.Router();
const { users, createUser } = require("../controllers/userController");

router.get("/users", users);
router.post("/users", createUser);

module.exports = router;
