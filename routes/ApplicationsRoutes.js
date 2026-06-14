const express = require("express");
const ApplicationsRouter = express.Router();

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication
} = require("../controllers/ApplicationsController");

// ➡️ Create Application
ApplicationsRouter.post("/", createApplication);

// ➡️ Get All Applications
ApplicationsRouter.get("/", getApplications);

// ➡️ Get Single Application by ID
ApplicationsRouter.get("/:_id", getApplicationById);

// ➡️ Update Application
ApplicationsRouter.put("/:_id", updateApplication);

// ➡️ Delete Application
ApplicationsRouter.delete("/:_id", deleteApplication);

module.exports = ApplicationsRouter;
