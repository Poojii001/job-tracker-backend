const Router = require("express").Router()

const Users = require("./Users")
const Jobs = require("./Jobs")

Router.use("/users", UserRouter) 
Router.use("/jobs", JobRouter)

module.exports = Router