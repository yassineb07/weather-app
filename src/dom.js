const createWeatherInfoItem = (elementId, elementIconId, text, src) => {
  const element = document.getElementById(elementId);
  const elementIcon = document.getElementById(elementIconId);
  element.textContent = text;
  elementIcon.src = src;
};

// populate the current weather card
const populateCurrent = (data) => {
  const location = data.locationInfo;
  const current = data.currentInfo;
  const forecast = data.forecastInfo;

  const currentInfoEl = document.getElementById('currentInfo');

  // location and date
  const locationDateEl = document.getElementById('locationDate');
  locationDateEl.textContent = `${location.name} ${location.country} ${location.localtime}`;

  // create current temperature info
  createWeatherInfoItem(
    'temp',
    'tempIcon',
    current.temp_c,
    current.condition.icon,
  );

  // create morning temperature info
  createWeatherInfoItem(
    'morningTemp',
    'morningIcon',
    forecast[0].hour[8].temp_c,
    forecast[0].hour[8].condition.icon,
  );

  // create afternoon temperature info
  createWeatherInfoItem(
    'afternoonTemp',
    'afternoonIcon',
    forecast[0].hour[14].temp_c,
    forecast[0].hour[14].condition.icon,
  );

  // create evening temperature info
  createWeatherInfoItem(
    'eveningTemp',
    'eveningIcon',
    forecast[0].hour[19].temp_c,
    forecast[0].hour[19].condition.icon,
  );

  // create night tempereture info
  createWeatherInfoItem(
    'nightTemp',
    'nightIcon',
    forecast[0].hour[22].temp_c,
    forecast[0].hour[22].condition.icon,
  );
};

// populate the all current weather card
const populateCurrentAll = (data) => {};

// populate the daily forcast card
const populateForecastDay = (data) => {};

// populate the hourly forecast card
const populateForecastHour = (data) => {};

// popolate the page
const populate = (data) => {
  populateCurrent(data);
};

export default populate;
