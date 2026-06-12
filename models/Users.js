// models/Users.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name is Mandatory"],
    trim: true
  },
  email: {
    type: String,
    required: [true,"Email Name is Mandatory"],
    unique: true,     // no duplicate emails
    lowercase: true
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User"
  },
  status: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
