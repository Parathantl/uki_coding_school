var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 8000;

//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(port, () => {
  console.log('We are live on ' + port);
});

// Connect to mongodb database
mongoose.connect("mongodb://admin2:root0@ds229008.mlab.com:29008/ukiapp");
