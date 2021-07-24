// Import express module
var express = require("express");

// Create app object
var app = express()

// Declare port
var port = process.env.port || 3000;

// Start the server
app.listen(port, ()=>{
    console.log("Congrats! Your application is running on port : ", port);
});