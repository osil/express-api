const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.get("/departments", departmentController.departments);
router.get("/departments/:fac_index", departmentController.departmentsByID);
module.exports = router;
