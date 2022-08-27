const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/");
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "16fd8731ebb9c341700289ef69d4b71f";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;
    https.get(url, function (response) {
      response.on("data", function (data) {
        const wData = JSON.parse(data);
        const temp = wData.main.temp;
        const icon = wData.weather[0].icon;
        const iUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write(
          "<h1>Current temperature in "+ query +" is " + temp + " degrees</h1>"
        );
        res.write("<h2>" + wData.weather[0].description + "</h2>");
        res.write('<img src = "' + iUrl + '">');
        res.send();
      });
    });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
