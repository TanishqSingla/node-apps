const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://eu1.locationiq.com/v1/search.php?key=d92749dd0546c9&q=" +
    encodeURI(address) +
    "&format=json";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body[0].length === 0) {
      callback("Unable to find location try different location", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].display_name
      });
    }
  });
};

module.exports = geocode;
