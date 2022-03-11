import { format } from 'date-fns';
import {
  kelvinToCelcius, meterToKm, degToCompass, convertTZ, convertToLocalTZ, weatherToIcon, capitalize,
} from './convert';

const updateResultsInfo = (query, results) => {
  const info = document.querySelector('.results-info');
  if (results.cod === '404' || query === '') {
    info.textContent = `0 search results for '${query}'`;
  } else {
    info.textContent = `1 search result for '${query}'`;
  }
};

const cityDate = (date) => {
  const small = document.createElement('small');
  small.className = 'date';
  small.textContent = format(date, 'LLL d, h:mma');

  return small;
};

const cityName = (city, country) => {
  const heading = document.createElement('h2');
  heading.textContent = `${city}, ${country}`;

  return heading;
};

const weatherDescription = (temperature, weather) => {
  const description = document.createElement('p');
  description.className = 'weather-description';
  description.textContent = `Feels like ${kelvinToCelcius(temperature)}. ${capitalize(weather)}.`;

  return description;
};

const weatherIcon = (iconName) => {
  const icon = document.createElement('i');
  icon.className = `${iconName} weather-icon`;

  return icon;
};

const weatherSpan = (data, iconClass) => {
  const span = document.createElement('span');
  if (typeof iconClass !== 'undefined') {
    const icon = document.createElement('icon');
    icon.className = iconClass;
    span.appendChild(icon);
    span.innerHTML += ` ${data}`;
  } else {
    span.textContent = data;
  }

  return span;
};

const dataPrimary = (results) => {
  const temp = weatherSpan(kelvinToCelcius(results.main.temp));
  temp.className = 'temperature';

  const primary = document.createElement('div');
  primary.className = 'data-primary';
  primary.appendChild(weatherIcon(weatherToIcon(results.weather[0].icon)));
  primary.appendChild(temp);

  return primary;
};

const dataSecondary = (results) => {
  const secondary = document.createElement('div');
  secondary.className = 'data-secondary';
  secondary.appendChild(weatherSpan(`${results.wind.speed} ${degToCompass(results.wind.deg)}`, 'fa-solid fa-wind'));
  secondary.appendChild(weatherSpan(`${results.main.pressure}hPa`, 'fa-solid fa-gauge-high'));
  secondary.appendChild(weatherSpan(`Humidity: ${results.main.humidity}%`));
  secondary.appendChild(weatherSpan(`Visibility: ${meterToKm(results.visibility)}`));
  secondary.appendChild(weatherSpan(`Sunrise: ${format(convertToLocalTZ(results.sys.sunrise, results.timezone), 'h:mma')}`));
  secondary.appendChild(weatherSpan(`Sunset: ${format(convertToLocalTZ(results.sys.sunset, results.timezone), 'h:mma')}`));

  return secondary;
};

const weatherData = (results) => {
  const data = document.createElement('div');
  data.className = 'weather-data';
  data.appendChild(dataPrimary(results));
  data.appendChild(dataSecondary(results));

  return data;
};

const displayCard = (results) => {
  const card = document.createElement('article');
  card.className = 'results-card';
  card.appendChild(cityDate(convertTZ(results.timezone)));
  card.appendChild(cityName(results.name, results.sys.country));
  card.appendChild(weatherDescription(results.main.feels_like, results.weather[0].description));
  card.appendChild(weatherData(results));

  return card;
};

const displaySearch = (query, results) => {
  const wrapper = document.querySelector('.results-wrapper');
  wrapper.textContent = '';
  updateResultsInfo(query, results);
  if (results.cod !== '404') {
    wrapper.appendChild(displayCard(results));
  }
};

export default displaySearch;
