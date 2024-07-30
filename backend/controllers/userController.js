const User = require("../models/User");
const validateUser = require("../models/User");

// Register a Users
const registerUser = (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { username, email, password } = req.body;
  let user = new User({ username, email, password });
  user
    .save()
    .then(() => res.send("User registered successfully"))
    .catch((err) => res.status(400).send(err.message));
};

module.exports = {
  registerUser,
};
