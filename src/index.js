import './style.css';
import populate from './dom';
import fetchWeatherInfo from './api';

const getUserInput = () => {
  const location = document.getElementById('location').value;
  return location;
};

const displayData = async (location) => {
  const weatherInfo = await fetchWeatherInfo(location);
  console.log(weatherInfo);
  populate(weatherInfo);
};

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = getUserInput();
  if (!location) return;
  displayData(location);
});
