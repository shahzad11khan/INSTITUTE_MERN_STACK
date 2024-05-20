// userController.js
const RegisterLang = require("../models/RegisStdLanguageModel");

// Create a new user
async function createUser(req, res) {
  console.log(req.body);
  try {
    const newUser = new RegisterLang(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all users
async function getUsers(req, res) {
  try {
    const users = await RegisterLang.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await RegisterLang.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Update a user by ID
async function updateUser(req, res) {
  const userId = req.params.id;
  try {
    const updatedUser = await RegisterLang.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedUser = await RegisterLang.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
