const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  City: String,
  Age: String,
  industry: String,
  contact: String // Contact Number
});

module.exports = mongoose.model("Company", CompanySchema);
