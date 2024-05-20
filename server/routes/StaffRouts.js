const express = require("express");
const router = express.Router();
const imagePostController = require("../controllers/StaffController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save image files to 'uploads/' directory
  },
  filename: function (req, file, cb) {
    // generate unique file name for each image
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Filter function to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

// Initialize multer with the storage and fileFilter
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Create
router.post(
  "/imageposts",
  upload.single("image"),
  imagePostController.createStaffmodel
);

// Read all
router.get("/imageposts", imagePostController.getAllImagePosts);

// Read one
router.get("/imageposts/:id", imagePostController.getImagePostById);

// Update
router.put("/imageposts/:id", imagePostController.updateImagePost);

// Delete
router.delete("/imageposts/:id", imagePostController.deleteImagePost);

module.exports = router;
