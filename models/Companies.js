const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Company Name is Mandatory"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is Mandatory"],
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, "Phone Number is Mandatory"],
    trim: true
  },
  location: {
    type: String,
    required: [true, "Location is Mandatory"],
    trim: true
  },
  logo: {
    type: String, // store logo filename or URL
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Companies = mongoose.model("Companies", companiesSchema);

module.exports = Companies;
