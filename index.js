const express= require("express")
require ("dotenv").config()

const app = express()                      // all incoming request ko parse krke bhejjega


let port = process.env.PORT || 8000
app.listen(port,console.log(`Server is Running at http://localhost:${port}`))