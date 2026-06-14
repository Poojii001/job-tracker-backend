const Companies = require("../models/Companies");

// ➡️ Create Company
async function createCompany(req, res) {
  try {
    let data = new Companies(req.body);
    await data.save();
    res.send({ result: "Done", data });
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Get All Companies
async function getCompanies(req, res) {
  try {
    let data = await Companies.find().sort({ _id: -1 });
    res.send({ result: "Done", count: data.length, data });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Get Single Company by ID
async function getCompanyById(req, res) {
  try {
    let data = await Companies.findById(req.params._id);
    if (data) {
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Company Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Update Company
async function updateCompany(req, res) {
  try {
    let data = await Companies.findById(req.params._id);
    if (data) {
      Object.assign(data, req.body); // update dynamically
      await data.save();
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Company Not Found" });
    }
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Delete Company
async function deleteCompany(req, res) {
  try {
    let data = await Companies.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "Company Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
};
