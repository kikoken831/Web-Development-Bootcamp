const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];
let item = "";

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day , itemList: items });
});

app.get("/work", (req,res) => {
  res.render("list", {listTitle: "Work List", itemList: workItems});

});

app.get("/about", (req,res) => {
  res.render("about");
})

app.post("/", (req, res) => {
  item = req.body.newItem;
  if(req.body.list === 'Work'){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
