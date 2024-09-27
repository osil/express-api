const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.users);
router.get("/user/:id", userController.userByID);
router.post("/user/login", userController.createUser);

module.exports = router;
