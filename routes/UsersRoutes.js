const UsersRouter = require("express").Router();

const {
  createUsers,
  getUsers,
  getUserById,   // ✅ spelling match karo controller ke sath
  updateUsers,
  deleteUsers
} = require("../controllers/UsersController");

// ➡️ Create User
UsersRouter.post("/", createUsers);

// ➡️ Get All Users
UsersRouter.get("/", getUsers);

// ➡️ Get Single User by ID
UsersRouter.get("/:_id", getUserById);   // ✅ ab sahi function hai

// ➡️ Update User
UsersRouter.put("/:_id", updateUsers);

// ➡️ Delete User
UsersRouter.delete("/:_id", deleteUsers);

module.exports = UsersRouter;
