const express = require("express");
const router = express.Router();
const imagePostController = require("../controllers/TutuionController");
// Create
router.post("/tutions", imagePostController.Tutionmodel);

// Read all
router.get("/tutions", imagePostController.getAll);

// Read one
router.get("/tutions/:id", imagePostController.getId);

// Update
router.put("/tutions/:id", imagePostController.updateId);

// Delete
router.delete("/tutions/:id", imagePostController.deleteId);

module.exports = router;
