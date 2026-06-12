const Users = require("../models/Users");

// ➡️ Create User
async function createUsers(req, res) {
  try {
    let data = new Users(req.body);
    await data.save();
    res.send({
      result: "Done",
      data: data
    });
  } catch (error) {
    let errorMessage = {};
    if (error?.keyValue?.email) errorMessage.email = "Email Already Exists";
    if (error?.errors?.name) errorMessage.name = error.errors.name.message;
    if (error?.errors?.email) errorMessage.email = error.errors.email.message;

    res.status(Object.keys(errorMessage).length ? 400 : 500).send({
      result: "Fail",
      reason: Object.keys(errorMessage).length ? errorMessage : "Internal Server Error"
    });
  }
}

// ➡️ Get All Users
async function getUsers(req, res) {
  try {
    let data = await Users.find().sort({ _id: -1 });
    res.send({
      result: "Done",
      count: data.length,
      data: data
    });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Get Single User
async function getUsersById(req, res) {
  try {
    let data = await Users.findById(req.params._id);
    if (data) {
      res.send({ result: "Done", data: data });
    } else {
      res.status(404).send({ result: "Fail", reason: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

// ➡️ Update User
async function updateUsers(req, res) {
  try {
    let data = await Users.findById(req.params._id);
    if (data) {
      data.name = req.body.name ?? data.name;
      data.email = req.body.email ?? data.email;
      data.status = req.body.status ?? data.status;
      data.role = req.body.role ?? data.role;

      await data.save();
      res.send({ result: "Done", data: data });
    } else {
      res.status(404).send({ result: "Fail", reason: "User Not Found" });
    }
  } catch (error) {
    res.status(400).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Delete User
async function deleteUsers(req, res) {
  try {
    let data = await Users.findById(req.params._id);
    if (data) {
      await data.deleteOne();
      res.send({ result: "Done" });
    } else {
      res.status(404).send({ result: "Fail", reason: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: "Internal Server Error" });
  }
}

module.exports = {
  createUsers,
  getUsers,
  getUserById,
  updateUsers,
  deleteUsers
};
