const Router = require("express").Router()

const Users = require("./Users")
const Jobs = require("./Jobs")
const Reports = require("./Reports")
const Applications = require("./Applications")
const Companies = require("./Companies")


Router.use("/users", UserRouter) 
Router.use("/jobs", JobRouter)
Router.use("/reports", ReportRouter)
Router.use("/applications", ApplicationRouter)
Router.use("/comapnies", CompaniesRouter)

module.exports = Router