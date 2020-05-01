const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/1f5d041a18655b25a82a9fa8f6de3508/${latitude},${longitude}`;
  request({url, json: true}, (error, response, body) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const currently = body.currently;
      callback(
        null,
        `It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
