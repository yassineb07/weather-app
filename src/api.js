const baseURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
const KEY = 'f7cde5d220a0466bba9165937232807';
const days = 3;

// creat Call URL
const constructUrl = (location) =>
  `${baseURL}${KEY}&q=${location}&days=${days}`;

// get location information
const getLocationInfo = (data) => {
  const {
    location: { name, region, country, localtime, localtime_epoch },
  } = data;
  return { name, region, country, localtime, localtime_epoch };
};

// get current weather information
const getCurrentInfo = (data) => {
  const {
    current: { temp_c, temp_f, condition, wind_kph, humidity },
  } = data;
  return { temp_c, temp_f, condition, wind_kph, humidity };
};

// get forecast information
const getForecastInfo = (data) => {
  const {
    forecast: { forecastday },
  } = data;
  const forecastInfo = [];
  forecastday.forEach((day) => {
    let {
      date,
      date_epoch,
      astro: { sunrise, sunset },
      day: {
        maxtemp_c,
        maxtemp_f,
        mintemp_c,
        mintemp_f,
        condition,
        avghumidity,
      },
      hour,
    } = day;

    forecastInfo.push({
      date,
      date_epoch,
      sunrise,
      sunset,
      maxtemp_c,
      maxtemp_f,
      mintemp_c,
      mintemp_f,
      condition,
      avghumidity,
      hour,
    });
  });
  return forecastInfo;
};

// get weather information from weather api
const fetchWeatherInfo = async (location) => {
  const URL = constructUrl(location);
  const response = await fetch(URL);
  const data = await response.json();
  const locationInfo = getLocationInfo(data);
  const currentInfo = getCurrentInfo(data);
  const forecastInfo = getForecastInfo(data);

  return { locationInfo, currentInfo, forecastInfo };
};

export default fetchWeatherInfo;
