const AuditLogs = require("../models/AuditLogs");

// ➡️ Get All Audit Logs
async function getAuditLogs(req, res) {
  try {
    let data = await AuditLogs.find().sort({ _id: -1 });
    res.send({ result: "Done", count: data.length, data });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Get Single Audit Log by ID
async function getAuditLogById(req, res) {
  try {
    let data = await AuditLogs.findById(req.params._id);
    if (data) {
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Audit Log Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Delete Audit Log
async function deleteAuditLogs(req, res) {
  try {
    let data = await AuditLogs.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "Audit Log Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

module.exports = {
  getAuditLogs,
  getAuditLogById,
  deleteAuditLogs
};
