const mongoose = require("mongoose");

const applicationsSchema = new mongoose.Schema({
  candidateName: {
    type: String,
    required: [true, "Candidate Name is Mandatory"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is Mandatory"],
    lowercase: true
  },
  jobTitle: {
    type: String,
    required: [true, "Job Title is Mandatory"],
    trim: true
  },
  company: {
    type: String,
    required: [true, "Company Name is Mandatory"],
    trim: true
  },
  resume: {
    type: String, // store resume filename or URL
    default: null
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  appliedDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Applications = mongoose.model("Applications", applicationsSchema);

module.exports = Applications;
