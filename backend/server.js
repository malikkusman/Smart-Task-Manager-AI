require("dotenv").config();

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);

PORT = process.env.PORT || 5000;

//Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
