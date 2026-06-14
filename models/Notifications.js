const mongoose = require("mongoose");

const notificationsSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Notification message is mandatory"],
    trim: true
  },
  status: {
    type: String,
    enum: ["Unread", "Read"],
    default: "Unread"
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Notifications = mongoose.model("Notifications", notificationsSchema);

module.exports = Notifications;
