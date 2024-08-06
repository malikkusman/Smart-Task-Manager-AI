const { User, validateUser } = require("../models/User");

// Register a User
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

// Login a User
const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      if (user.password !== password) {
        return res.status(401).send("Invalid password");
      }
      res.send("Login successful");
    })
    .catch((err) => res.status(400).send(err.message));
};

module.exports = {
  registerUser,
  loginUser,
};
