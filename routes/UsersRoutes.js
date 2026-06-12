const UsersRouter = require("express").Router();

const {
  createUsers,
  getUsers,
  getUsersById,
  updateUsers,
  deleteUsers
} = require("../controllers/UsersController");

// ➡️ Create User
UsersRouter.post("/", createUsers);

// ➡️ Get All Users
UsersRouter.get("/", getUsers);

// ➡️ Get Single User by ID
UsersRouter.get("/:_id", getUsersById);

// ➡️ Update User
UsersRouter.put("/:_id", updateUsers);

// ➡️ Delete User
UsersRouter.delete("/:_id", deleteUsers);

module.exports = UsersRouter;
