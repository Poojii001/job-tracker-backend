const express = require("express");
require("dotenv").config();

require("./db-connect")
const app = express();  
app.use(express.json()); // incoming request body ko parse karega

// ✅ Import UsersRoutes
const userRoutes = require("./routes/UsersRoutes");
const jobRoutes = require("./routes/JobsRoutes");
const reportsRoutes = require("./routes/ReportsRoutes");
const applicationsRoutes = require("./routes/ApplicationsRoutes");
const companiesRoutes = require("./routes/CompaniesRoutes");
// app.use("/users", userRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/jobs", jobRoutes); 
app.use("/api/reports", reportsRoutes);
app.use("/api/applications", applicationsRoutes);
app.use("/api/companies", companiesRoutes);



// ✅ Port setup
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
