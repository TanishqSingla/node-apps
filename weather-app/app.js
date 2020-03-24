const request = require("request");

const url =
  "https://api.darksky.net/forecast/a75189e53de8cdc42a2eb8e7bdc1c4d7/37.8267,-122.4233?unit=si";

request({ url: url, json: true }, (error, response) => {
  const currentRes = response.body.currently;
  console.log(
    `It is currently ${
      currentRes.temperature
    }. There is ${currentRes.precipProbability * 100}% probablity`
  );
});

//Geocoding
const token =
  "https://eu1.locationiq.com/v1/search.php?key=d92749dd0546c9&q=Los%20Angeles&format=json";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the service");
  } else if (response.body.error) {
    console.log("Cannot find location");
  } else {
    const lat = response.body[0].lat;
    const lon = response.body[0].lon;
    console.log(lat, lon);
  }
});
