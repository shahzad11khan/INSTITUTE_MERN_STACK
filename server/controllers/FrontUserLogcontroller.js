const UserRegistermodel = require("../models/Registermodel"); // Assuming you have a User model defined

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await UserRegistermodel.findOne({ email: email }).exec();

    // If user not found
    if (!user) {
      return res.status(401).json({ error: "Email not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // If everything is correct, send success response
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
