const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.send(
    `${req.body.num1} + ${req.body.num2} = ${
      Number(req.body.num1) + Number(req.body.num2)
    }`
  );
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function (req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    console.log(height);
    console.log(weight);
    res.send(`Your bmi is ${weight/(height**2)}`);
});
app.listen(3000, function () {
  console.log("Server has started.");
});
