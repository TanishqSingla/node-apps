const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/a75189e53de8cdc42a2eb8e7bdc1c4d7/${lat},${lon}`;

  request({ url, json: true }, (error, { body }) => {
    const currentRes = body.currently;

    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${
          currentRes.temperature
        }. There is ${currentRes.precipProbability * 100}% probablity`
      );
    }
  });
};

module.exports = forecast;
