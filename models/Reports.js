const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema({
  // Summary
  totalJobs: {
    type: Number,
    default: 0
  },
  activeJobs: {
    type: Number,
    default: 0
  },
  inactiveJobs: {
    type: Number,
    default: 0
  },

  // Salary Distribution
  lowSalary: {
    type: Number,
    default: 0
  },
  midSalary: {
    type: Number,
    default: 0
  },
  highSalary: {
    type: Number,
    default: 0
  },

  // Company-wise jobs (key-value map)
  companyWise: {
    type: Map,
    of: Number,
    default: {}
  },

  // Location-wise jobs
  locationWise: {
    type: Map,
    of: Number,
    default: {}
  },

  // Time-series jobs posted by date
  timeSeries: {
    type: Map,
    of: Number,
    default: {}
  },

  // Report generated date
  generatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Reports = mongoose.model("Reports", reportsSchema);

module.exports = Reports;
