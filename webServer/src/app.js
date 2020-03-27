const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//public directory and config
const publicDir = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(publicDir));

//Handlebars and views location
app.set("views", path.join(__dirname, "../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

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
    title: "Help",
    helpText: "This is some helpful text"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is clear",
    location: "India"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Tanishq Singla",
    errorMessage: "Help article not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Tanishq Singla",
    errorMessage: "Page not found"
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
