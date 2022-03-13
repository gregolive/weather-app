import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import queryWeatherData from './queryWeatherData';
import displaySearch from './displaySearch';
import displayLoading from './displayLoading';
import updateSearch from './updateSearch';

const searchWeather = async (e) => {
  e.preventDefault();
  const query = document.querySelector('.search-input').value;
  displayLoading();
  const results = await queryWeatherData(query);
  displaySearch(query, results);
};

const updateResults = (e) => {
  const cards = document.querySelectorAll('.results-card');
  if (cards.length > 0) {
    updateSearch(e.target.checked, cards);
  }
};

document.querySelector('.search-form').addEventListener('submit', searchWeather);
document.querySelector('.unit-slider').addEventListener('click', updateResults);
