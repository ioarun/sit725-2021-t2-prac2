// Import express module
var express = require("express");

// Create app object
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Declare port
var port = process.env.port || 3000;


/**
 * Following are a few HTTPS methods.
 * GET - fetches data from server
 * POST - posts data to server
 */

// File upload service - POST
app.post("/upload", (req, res) => {
    console.log(req.body);
    res.json({statusCode: 200, data: req.body.fileName, message: "Upload successful!"});
});

// Start the server
app.listen(port, ()=>{
    console.log("Congrats! Your application is running on port : ", port);
});