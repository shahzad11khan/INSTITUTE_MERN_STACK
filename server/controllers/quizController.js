// controllers/quizController.js
const Quiz = require("../models/Quiz");

// Create a new quiz
exports.createQuiz = (req, res) => {
  const { capital, Romeo_and_Juliet } = req.body;

  const newQuiz = new Quiz({
    capital,
    Romeo_and_Juliet,
  });

  newQuiz
    .save()
    .then((savedQuiz) => {
      res.status(201).json(savedQuiz);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save quiz data" });
    });
};

// Get all quizzes
exports.getAllQuizzes = (req, res) => {
  Quiz.find()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch quizzes" });
    });
};

// Get a quiz by ID
exports.getQuizById = (req, res) => {
  const quizId = req.params.id;
  Quiz.findById(quizId)
    .then((quiz) => {
      if (!quiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch quiz" });
    });
};

// Update a quiz by ID
exports.updateQuizById = (req, res) => {
  const quizId = req.params.id;
  const { capital, Romeo_and_Juliet } = req.body;
  Quiz.findByIdAndUpdate(quizId, { capital, Romeo_and_Juliet }, { new: true })
    .then((updatedQuiz) => {
      if (!updatedQuiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(updatedQuiz);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update quiz" });
    });
};

// Delete a quiz by ID
exports.deleteQuizById = (req, res) => {
  const quizId = req.params.id;
  Quiz.findByIdAndDelete(quizId)
    .then((deletedQuiz) => {
      if (!deletedQuiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(deletedQuiz);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete quiz" });
    });
};
