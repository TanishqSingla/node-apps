const request = require("request");

const url =
  "https://api.darksky.net/forecast/a75189e53de8cdc42a2eb8e7bdc1c4d7/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const currentRes = response.body.currently;
  console.log(
    `It is currently ${
      currentRes.temperature
    }. There is ${currentRes.precipProbability * 100}% probablity`
  );
});
