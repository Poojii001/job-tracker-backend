const mongoose = require("mongoose");

const auditLogsSchema = new mongoose.Schema({
  action: {
    type: String,
    required: [true, "Action is mandatory"],
    trim: true
  },
  user: {
    type: String,
    required: [true, "User is mandatory"],
    trim: true
  },
  role: {
    type: String,
    required: [true, "Role is mandatory"],
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  ip: {
    type: String,
    default: null
  },
  details: {
    type: String,
    default: ""
  }
}, { timestamps: true });

const AuditLogs = mongoose.model("AuditLogs", auditLogsSchema);

module.exports = AuditLogs;
