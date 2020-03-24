const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log("Error", error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log("error", error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
