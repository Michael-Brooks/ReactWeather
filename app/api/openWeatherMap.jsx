var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=bd0ec995c491ff7867ff7d9e365dfaae';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod !== '200' && res.data.message !== 'accurate') {
        throw new Error('Unable to fetch weather for that location');
      } else {
        return res.data.list[0].main.temp;
      }
    }, function (err) {
      throw new Error('Unable to fetch weather for that location');
    });
  }
}