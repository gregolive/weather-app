import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import queryWeatherData from './queryWeatherData';
import displaySearch from './displaySearch';

const searchWeather = async () => {
  const query = document.querySelector('.search-input').value;
  const results = await queryWeatherData(query);
  displaySearch(query, results);
};

document.querySelector('.search-btn').addEventListener('click', searchWeather);
