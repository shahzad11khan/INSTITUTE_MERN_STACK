const express = require("express");
const router = express.Router();
const imagePostController = require("../controllers/Languagescontrollers");
// Create
router.post("/languages", imagePostController.Languagemodel);

// Read all
router.get("/languages", imagePostController.getAll);

// Read one
router.get("/languages/:id", imagePostController.getId);

// Update
router.put("/languages/:id", imagePostController.updateId);

// Delete
router.delete("/languages/:id", imagePostController.deleteId);

module.exports = router;
