const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");

// Express App
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

// Read and parse JSON
app.use(express.json());

// Public directory
app.use(express.static("public"));

// Routes
app.use("/api/confirm", require("./routes/confirm"));

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
