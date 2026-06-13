const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job Title is Mandatory"],
    trim: true
  },
  company: {
    type: String,
    required: [true, "Company Name is Mandatory"],
    trim: true
  },
  logo: {
    type: String, // store image filename or URL
    default: null
  },
  location: {
    type: String,
    required: [true, "Location is Mandatory"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is Mandatory"],
    lowercase: true
  },
  salary: {
    type: Number,
    default: 0
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true // Active by default
  }
}, { timestamps: true });

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
