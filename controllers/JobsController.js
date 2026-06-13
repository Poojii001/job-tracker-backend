const Jobs = require("../models/Jobs");

// ➡️ Create Job
async function createJob(req, res) {
  try {
    let data = new Jobs(req.body);
    await data.save();
    res.send({ result: "Done", data: data });
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Get All Jobs
async function getJobs(req, res) {
  try {
    let data = await Jobs.find().sort({ _id: -1 });
    res.send({ result: "Done", count: data.length, data: data });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Get Single Job by ID
async function getJobById(req, res) {
  try {
    let data = await Jobs.findById(req.params._id);
    if (data) {
      res.send({ result: "Done", data: data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Job Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Update Job
async function updateJob(req, res) {
  try {
    let data = await Jobs.findById(req.params._id);
    if (data) {
      data.title = req.body.title ?? data.title;
      data.company = req.body.company ?? data.company;
      data.logo = req.body.logo ?? data.logo;
      data.location = req.body.location ?? data.location;
      data.email = req.body.email ?? data.email;
      data.salary = req.body.salary ?? data.salary;
      data.status = req.body.status ?? data.status;

      await data.save();
      res.send({ result: "Done", data: data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Job Not Found" });
    }
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Delete Job
async function deleteJob(req, res) {
  try {
    let data = await Jobs.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "Job Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob
};
