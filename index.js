const express = require("express");
require("dotenv").config();

require("./db-connect")
const app = express();  
app.use(express.json()); // incoming request body ko parse karega

// ✅ Import UsersRoutes
const userRoutes = require("./routes/UsersRoutes");
// app.use("/users", userRoutes);
app.use("/api/users", userRoutes); 

// ✅ Port setup
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
