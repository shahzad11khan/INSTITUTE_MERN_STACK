// routes.js

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/RegiStdLanguage");

// Route to create a new user
router.post("/RegisterLang", UserController.createUser);

// Route to get all users
router.get("/RegisterLang", UserController.getUsers);

// Route to get a single user by ID
router.get("/RegisterLang/:id", UserController.getUserById);

// Route to update a user by ID
router.put("/RegisterLang/:id", UserController.updateUser);

// Route to delete a user by ID
router.delete("/RegisterLang/:id", UserController.deleteUser);

module.exports = router;
