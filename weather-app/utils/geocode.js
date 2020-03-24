const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://eu1.locationiq.com/v1/search.php?key=d92749dd0546c9&q=" +
    encodeURI(address) +
    "&format=json";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body[0].length === 0) {
      callback("Unable to find location try different location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body[0].lat,
        longitude: response.body[0].lon,
        location: response.body[0].display_name
      });
    }
  });
};

module.exports = geocode;
