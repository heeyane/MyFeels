/** @format */
require("dotenv").config()
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));
// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.DB_URI, {

}).then(()=>{
    console.log("mongo connecting")
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});