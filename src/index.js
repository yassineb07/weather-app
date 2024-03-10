import './style.css';
import populate from './dom';

const getUserInput = () => {
  const location = document.getElementById('location').value;
  return location;
};

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = getUserInput();
  if (!location) return;
  populate(location);
});
