const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/1f5d041a18655b25a82a9fa8f6de3508/${latitude},${longitude}?units=auto`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const currently = body.currently;
      callback(
        null,
        `${body.daily.summary} It is currently ${
          currently.temperature
        } degrees out. Humidity is ${currently.humidity * 100}%, Wind Speed is ${
          currently.windSpeed
        }`
      );
    }
  });
};

module.exports = forecast;
