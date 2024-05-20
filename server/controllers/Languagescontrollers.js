const Language = require("../models/Languagesmodel");

exports.Languagemodel = async (req, res) => {
  console.log(req.body);
  try {
    // Create a new staff model with file metadata
    const newStaff = new Language({
      name: req.body.name,
      language: req.body.language,
      shortDescription: req.body.shortDescription,
      // Other fields you want to save along with the file
      //   image: req.file.filename, // Store the file path
    });

    // Save the staff model to the database
    const savedStaff = await newStaff.save();

    res.status(201).json(savedStaff);
  } catch (error) {
    console.error("Error saving file and data:", error);
    res.status(500).json({ error: "Failed to save file and data" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const newstaffs = await Language.find();
    res.status(200).json(newstaffs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getId = async (req, res) => {
  try {
    const newstaff = await Language.findById(req.params.id);
    if (!newstaff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    res.status(200).json(newstaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateId = async (req, res) => {
  try {
    const updatednewstaff = await Language.findByIdAndUpdate(
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

exports.deleteId = async (req, res) => {
  try {
    const deletednewstaff = await Language.findByIdAndDelete(req.params.id);
    if (!deletednewstaff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    res.status(200).json({ message: "Staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
