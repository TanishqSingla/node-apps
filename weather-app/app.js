const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

geocode(address, (error, data) => {
  if (error) {
    return console.log("Error", error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log("error", error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
