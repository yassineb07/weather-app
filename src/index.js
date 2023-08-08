import './style.css';

const getWeatherInfo = async (location) => {
  const baseURL = 'http://api.weatherapi.com/v1/current.json?key=';
  const KEY = 'f7cde5d220a0466bba9165937232807';
  const URL = `${baseURL}${KEY}&q=${location}`;

  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

const getUserInput = () => {
  const location = document.getElementById('location').value;
  return location;
};

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = getUserInput();
  if (!location) return;
  console.log(location);
  getWeatherInfo(location);
});
