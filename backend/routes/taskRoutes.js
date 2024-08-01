const express = require("express");
const route = express.Router();

const taskcontroller = require("../controllers/TaskController");


route.post("/tasks", taskcontroller.addTask);
route.get("/getTasks", taskcontroller.getTasks);
route.get("/task/:id", taskcontroller.getTask);
route.delete("/delete-task/:id", taskcontroller.deleteTask);
route.put("/update-task/:id", taskcontroller.editTask);


module.exports = route;