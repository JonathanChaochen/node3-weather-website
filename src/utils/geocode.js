const request = require('request');

const geocode = (address, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiY2hhb2NoZW4iLCJhIjoiY2p3c2xqYW1pMDNxZzRibHlodjFuMmQwbiJ9.ntibxY-is20Rz4GMgA1Jww`;
  request({url: geocodeUrl, json: true}, (error, response, body) => {
    if (error) {
      callback('Unable to connect to location service!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      const feature = body.features[0];
      callback(null, {
        latitude: feature.center[1],
        longitude: feature.center[0],
        location: feature.place_name,
      });
    }
  });
};

module.exports = geocode;
