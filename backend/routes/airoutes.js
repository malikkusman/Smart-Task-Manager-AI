const express = require("express");

const route  = express.Router();

const aicontroller = require("../controllers/OpenAIController");


route.post("/gpt", aicontroller.addAITask);

module.exports = route;