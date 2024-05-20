const Staff = require("../models/Staffmodel");

exports.createStaffmodel = async (req, res) => {
  // Check if req.file is available
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Create a new staff model with file metadata
    const newStaff = new Staff({
      name: req.body.name,
      shortDescription: req.body.shortDescription,
      // Other fields you want to save along with the file
      image: req.file.filename, // Store the file path
    });

    // Save the staff model to the database
    const savedStaff = await newStaff.save();

    res.status(201).json(savedStaff);
  } catch (error) {
    console.error("Error saving file and data:", error);
    res.status(500).json({ error: "Failed to save file and data" });
  }
};

exports.getAllImagePosts = async (req, res) => {
  try {
    const newstaffs = await Staff.find();
    res.status(200).json(newstaffs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getImagePostById = async (req, res) => {
  try {
    const newstaff = await Staff.findById(req.params.id);
    if (!newstaff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    res.status(200).json(newstaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateImagePost = async (req, res) => {
  try {
    const updatednewstaff = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatednewstaff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    res.status(200).json(updatednewstaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteImagePost = async (req, res) => {
  try {
    const deletednewstaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletednewstaff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    res.status(200).json({ message: "Staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
