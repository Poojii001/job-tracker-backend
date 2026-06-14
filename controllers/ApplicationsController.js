const Applications = require("../models/Applications");

// ➡️ Create Application
async function createApplication(req, res) {
  try {
    let data = new Applications(req.body);
    await data.save();
    res.send({ result: "Done", data });
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Get All Applications
async function getApplications(req, res) {
  try {
    let data = await Applications.find().sort({ _id: -1 });
    res.send({ result: "Done", count: data.length, data });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Get Single Application by ID
async function getApplicationById(req, res) {
  try {
    let data = await Applications.findById(req.params._id);
    if (data) {
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Application Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Update Application
async function updateApplication(req, res) {
  try {
    let data = await Applications.findById(req.params._id);
    if (data) {
      Object.assign(data, req.body); // update dynamically
      await data.save();
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Application Not Found" });
    }
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Delete Application
async function deleteApplication(req, res) {
  try {
    let data = await Applications.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "Application Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication
};
