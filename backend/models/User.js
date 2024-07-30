const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplex = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const User = mongoose.model("User", userSchema);

const validateUser = (data) => {
  const schema = Joi.object({
    username: Joi.string()
      .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,}$"))
      .required()
      .label("Username")
      .messages({
        "string.pattern.base":
          "Username must contain letters and numbers and be at least 6 characters long.",
      }),
    email: Joi.string()
      .email()
      .pattern(new RegExp("^[a-zA-Z0-9._%+-]+@gmail\\.com$"))
      .required()
      .label("Email")
      .messages({
        "string.pattern.base": "Email must be a valid Gmail address.",
      }),
    password: passwordComplex().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = {
  User,
  validateUser,
};
