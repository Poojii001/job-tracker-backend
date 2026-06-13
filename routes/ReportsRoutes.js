const express = require("express");
const ReportsRouter = express.Router();

const {
  generateReport,
  getReports,
  getReportById
} = require("../controllers/ReportsController");

// ➡️ Generate and Save Report Snapshot
ReportsRouter.post("/", generateReport);

// ➡️ Get All Reports (History)
ReportsRouter.get("/", getReports);

// ➡️ Get Single Report by ID
ReportsRouter.get("/:_id", getReportById);

module.exports = ReportsRouter;
