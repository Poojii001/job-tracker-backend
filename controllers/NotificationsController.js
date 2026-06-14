const Notifications = require("../models/Notifications");

// ➡️ Get All Notifications
async function getNotifications(req, res) {
  try {
    let data = await Notifications.find().sort({ _id: -1 });
    res.send({ result: "Done", count: data.length, data });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Delete Notification
async function deleteNotifications(req, res) {
  try {
    let data = await Notifications.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "Notification Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Mark Notification as Read
async function markRead(req, res) {
  try {
    let data = await Notifications.findById(req.params._id);
    if (data) {
      data.status = "Read";
      await data.save();
      res.send({ result: "Done", data });
    } else {
      res.status(404).send({ result: "Fail", reason: "Notification Not Found" });
    }
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

module.exports = {
  getNotifications,
  deleteNotifications,
  markRead
};
