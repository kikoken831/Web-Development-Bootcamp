const express = require('express');
const app = express();

//GET homepage
app.get("/", function(req,res){
    res.send("<h1>Hello</h1>");
});

//GET contact
app.get("/contact", function (req,res) {
    res.send("<p>Contact me at kennyhu831@gmail.com</p>");
});

//GET about
app.get("/about", function(req,res){
    res.send("<p>some info about me</p>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

