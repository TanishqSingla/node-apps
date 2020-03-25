const path = require("path");
const express = require("express");
const app = express();

//public directory and config
const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

//Handlebars and views location
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Tanishq Singla"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Tanishq Singla"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is clear",
    location: "India"
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
