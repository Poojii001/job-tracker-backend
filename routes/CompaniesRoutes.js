const express = require("express");
const CompaniesRouter = express.Router();

const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
} = require("../controllers/CompaniesController");

// ➡️ Create Company
CompaniesRouter.post("/", createCompany);

// ➡️ Get All Companies
CompaniesRouter.get("/", getCompanies);

// ➡️ Get Single Company by ID
CompaniesRouter.get("/:_id", getCompanyById);

// ➡️ Update Company
CompaniesRouter.put("/:_id", updateCompany);

// ➡️ Delete Company
CompaniesRouter.delete("/:_id", deleteCompany);

module.exports = CompaniesRouter;
