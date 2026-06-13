const express = require("express");
const JobsRouter = express.Router();

const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob
} = require("../controllers/JobsController");

// ➡️ Create Job
JobsRouter.post("/", createJob);

// ➡️ Get All Jobs
JobsRouter.get("/", getJobs);

// ➡️ Get Single Job by ID
JobsRouter.get("/:_id", getJobById);

// ➡️ Update Job
JobsRouter.put("/:_id", updateJob);

// ➡️ Delete Job
JobsRouter.delete("/:_id", deleteJob);

module.exports = JobsRouter;
