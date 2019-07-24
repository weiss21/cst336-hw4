/* Code Below mostly borrowed from Lab 4
Faker API learned from source: https://github.com/marak/Faker.js/
Express API learned from CSt 336 Summer 2019 course.
*/

const express = require("express"); //imports Express Library
const app = express(); //variable "app" to access methods.
var faker = require('faker'); //imports faker
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var port = process.env.PORT || "8000"; //To work in both local (codeanywhere) and heroku
var serial = process.env.IP || "0.0.0.0"; // same as comment above
//server listener original example
//app.listen("8081", "0.0.0.0", function(){
//  console.log("Express Server is Running...")
//});
//faker
var names = faker.name.findName() + ' who works for ' + faker.company.companyName() + " says:";
var phrase = faker.hacker.phrase();

//below pic not working out as I intended
var pics = faker.image.avatar();

// Heroku update server listener
app.listen(port, serial, function() {
  console.log("Express Server is Running. . . ")
});


app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/ios", function(req, res) {
  res.render("ios.html");
});

app.get("/android", function(req, res) {
  res.render("android.html");
});

app.get("/other", function(req, res) {
  res.render("other.html", {
    "generateText": names, "generatePhrase": phrase
  });
});

