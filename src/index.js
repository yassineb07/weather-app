import './style.css';
import { populate, addEventListeners } from './dom';
import fetchWeatherInfo from './api';

// get user input
const getUserInput = () => {
  const location = document.getElementById('location').value;
  return location;
};

// get data from server and populate the page
const displayData = async (location) => {
  const weatherInfo = await fetchWeatherInfo(location);
  populate(weatherInfo);
  addEventListeners(weatherInfo);
};

// add event listeners

// form submit
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = getUserInput();
  if (!location) return;
  displayData(location);
});
