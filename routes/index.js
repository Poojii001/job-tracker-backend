const Router = require("express").Router()

const Users = require("./Users")
const Jobs = require("./Jobs")
const Reports = require("./Reports")

Router.use("/users", UserRouter) 
Router.use("/jobs", JobRouter)
Router.use("/reports", ReportRouter)

module.exports = Router