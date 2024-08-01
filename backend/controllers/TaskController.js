import { Task } from "../models/Task";

const addTask = async (req, res) => {
  try {
    const { id, title, description, category, priority, tags, notes } =
      req.body;

    if (
      !id ||
      !title ||
      !description ||
      !category ||
      !priority ||
      !tags ||
      !notes
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const task = new Task({
      id,
      title,
      description,
      category,
      priority,
      tags,
      notes,
    });

    await task.save();
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ count: tasks.length, data: tasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletetasks = await Task.findByIdAndDelete(id);

    if (!deletetasks) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    return res.status(200).json(task);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const editTask = async (req, res) => {
  try {
    const {
      body: { title, description, category, priority, tags, notes },
      params: { id },
    } = req;

    if (!title || !description || !category || !priority || !tags || !notes) {
      return res.status(400).send({ message: "Missing required data" });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task to update not found" });
    }

    return res.status(200).send({ message: "Task updated successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addTask,
  getTasks,
  deleteTask,
  getTask,
  editTask,
};
