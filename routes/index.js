const Router = require("express").Router()

const Users = require("./Users")
const Jobs = require("./Jobs")
const Reports = require("./Reports")
const Applications = require("./Applications")

Router.use("/users", UserRouter) 
Router.use("/jobs", JobRouter)
Router.use("/reports", ReportRouter)
Router.use("/applications", ApplicationRouter)

module.exports = Router