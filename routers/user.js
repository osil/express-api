const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.users);
router.post("/user/login", userController.createUser);

module.exports = router;
