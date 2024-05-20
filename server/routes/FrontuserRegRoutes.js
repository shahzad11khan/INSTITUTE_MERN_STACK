// routes.js

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/FrontUserRegController");

// Route to create a new user
router.post("/Registermodel", UserController.createUser);

// Route to get all users
router.get("/Registermodels", UserController.getUsers);

// Route to get a single user by ID
router.get("/Registermodel/:id", UserController.getUserById);

// Route to update a user by ID
router.put("/Registermodel/:id", UserController.updateUser);

// Route to delete a user by ID
router.delete("/Registermodel/:id", UserController.deleteUser);

module.exports = router;
