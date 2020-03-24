const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

geocode("Boston", (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Data", data);
  }
});

forecast(42.3602534, -71.0582912, (error, data) => {
  console.log("Data", data);
  console.log("error", error);
});
