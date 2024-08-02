require("dotenv").config();

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const AIRoutes = require("./routes/airoutes");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use("/api", userRoutes);
app.use("/api", taskRoutes);
app.use("/api", AIRoutes);

PORT = process.env.PORT || 5000;

//Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
