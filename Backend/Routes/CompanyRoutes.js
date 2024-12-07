  const express = require("express");
  const Company = require("../Models/Company.js");
  const router = express.Router();
  const adminAuth = require("../Middlewares/adminMiddleware.js");

  console.log(Company);


  // Get all companies
  router.get("/", async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Add a company (admin only)
  router.post("/", adminAuth,  async (req, res) => {  
    try {
      const newCompany = new Company(req.body);
  
      await newCompany.save();
      res.status(201).json(newCompany);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  

  // Update a company (admin only)
  router.put("/:id", adminAuth,  async (req, res) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedCompany);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Delete a company (admin only)
  router.delete("/:id", adminAuth,  async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params.id);
      res.json({ message: "Company deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;
