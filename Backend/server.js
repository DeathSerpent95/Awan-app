const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const companyRoutes = require("./Routes/companyRoutes"); 
const authRoutes = require("./Routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/companies", companyRoutes);
app.use(cors());



const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

// Example route
app.get("/", (req, res) => res.send("API is running..."));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
