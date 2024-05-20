const express = require("express");
const router = express.Router();
const loginController = require("../controllers/FrontUserLogcontroller");

// Define login route
router.post("/loginuser", loginController.login);

module.exports = router;
