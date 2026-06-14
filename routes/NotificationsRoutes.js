const express = require("express");
const NotificationsRouter = express.Router();

const {
  getNotifications,
  deleteNotifications,
  markRead
} = require("../controllers/NotificationsController");

// ➡️ Get All Notifications
NotificationsRouter.get("/", getNotifications);

// ➡️ Delete Notification
NotificationsRouter.delete("/:_id", deleteNotifications);

// ➡️ Mark Notification as Read
NotificationsRouter.put("/:_id/read", markRead);

module.exports = NotificationsRouter;
