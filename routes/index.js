const Router = require("express").Router()

const Users = require("./Users")
const Jobs = require("./Jobs")
const Reports = require("./Reports")
const Applications = require("./Applications")
const Companies = require("./Companies")
const Notifications = require("./Notifications")
const AuditLogs = require("./AuditLogs")


Router.use("/users", UserRouter) 
Router.use("/jobs", JobRouter)
Router.use("/reports", ReportRouter)
Router.use("/applications", ApplicationRouter)
Router.use("/comapnies", CompaniesRouter)
Router.use("/Notifications", NotificationRouter)
Router.use("/auditLogs", AuditLogsRouter)

module.exports = Router