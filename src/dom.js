import fetchWeatherInfo from './api';

// populate the current weather card
const populateCurrent = (data) => {
  const location = data.locationInfo;
  const current = data.currentInfo;
  const forecast = data.forecastInfo;

  const currentInfoEl = document.getElementById('currentInfo');

  // location and date
  const locationDateEl = document.getElementById('locationDate');
  locationDateEl.textContent = `${location.name} ${location.country} ${location.localtime}`;

  // current temp
  const tempEl = document.getElementById('temp');
  tempEl.textContent = current.temp_c;
  const tempIconEl = document.getElementById('tempIcon');
  tempIconEl.src = `${current.condition.icon}`;

  // morning
  const morningIconEl = document.getElementById('morningIcon');
  morningIconEl.src = forecast[0].hour[8].condition.icon;
  const morningTempEl = document.getElementById('morningTemp');
  morningTempEl.textContent = forecast[0].hour[8].temp_c;

  // afternoon
  const afternoonIconEl = document.getElementById('afternoonIcon');
  afternoonIconEl.src = forecast[0].hour[14].condition.icon;
  const afternoonTempEl = document.getElementById('afternoonTemp');
  afternoonTempEl.textContent = forecast[0].hour[14].temp_c;

  // evening
  const eveningIconEl = document.getElementById('eveningIcon');
  eveningIconEl.src = forecast[0].hour[19].condition.icon;
  const eveningTempEl = document.getElementById('eveningTemp');
  eveningTempEl.textContent = forecast[0].hour[19].temp_c;

  // night
  const nightIconEl = document.getElementById('nightIcon');
  nightIconEl.src = forecast[0].hour[22].condition.icon;
  const nightTempEl = document.getElementById('nightTemp');
  nightTempEl.textContent = forecast[0].hour[22].temp_c;
};

// populate the all current weather card
const populateCurrentAll = (data) => {};

// populate the daily forcast card
const populateForecastDay = (data) => {};

// populate the hourly forecast card
const populateForecastHour = (data) => {};

// popolate the page
const populate = async (location) => {
  const weatherInfo = await fetchWeatherInfo(location);
  console.log(weatherInfo);
  populateCurrent(weatherInfo);
};

export default populate;
