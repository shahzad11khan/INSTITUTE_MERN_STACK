const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

// Import routes
const userRoutes = require("./routes/userroutes");
const FrontUserReg = require("./routes/FrontuserRegRoutes");
const FrontUserLog = require("./routes/FrontuserLogRoutes");
const Staff = require("./routes/StaffRouts");
const Languages = require("./routes/LanguageRoutes");
const RegLanguages = require("./routes/RegStdLanguageRoutes");
const Tution = require("./routes/TutionRoutes");
const payments = require("./routes/paymentRoutes");
const quiz = require("./routes/quizRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", userRoutes);
app.use("/api", FrontUserReg);
app.use("/api", FrontUserLog);
app.use("/api", Staff);
app.use("/api", Languages);
app.use("/api", RegLanguages);
app.use("/api", Tution);
app.use("/api", payments);
app.use("/api", quiz);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
