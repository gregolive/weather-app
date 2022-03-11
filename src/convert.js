const kelvinToCelcius = (tempK) => `${Math.round(tempK - 273.15)}°C`;

const meterToKm = (meter) => `${(meter / 1000).toFixed(1)}km`;

const degToCompass = (deg) => {
  const val = Math.floor((deg / 22.5) + 0.5);
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[(val % 16)];
};

const convertTZ = (zoneOffset) => {
  const userOffset = new Date().getTimezoneOffset() * 60;
  return new Date(new Date().getTime() + (userOffset + zoneOffset) * 1000);
};

const convertToLocalTZ = (time, zoneOffset) => {
  const userOffset = new Date().getTimezoneOffset() * 60;
  return new Date((time + userOffset + zoneOffset) * 1000);
};

const weatherToIcon = (iconCode) => {
  const icons = [
    { code: '01d', class: 'fa-solid fa-sun icon-yellow' },
    { code: '01n', class: 'fa-solid fa-moon icon-light-blue' },
    { code: '02d', class: 'fa-solid fa-cloud-sun icon-light-yellow' },
    { code: '02n', class: 'fa-solid fa-cloud-moon icon-dark-gray' },
    { code: '03d', class: 'fa-solid fa-cloud-sun icon-light-yellow' },
    { code: '03n', class: 'fa-solid fa-cloud-moon icon-dark-gray' },
    { code: '04d', class: 'fa-solid fa-cloud icon-gray' },
    { code: '04n', class: 'fa-solid fa-cloud icon-dark-gray' },
    { code: '09d', class: 'fa-solid fa-cloud-sun-rain icon-light-blue' },
    { code: '09n', class: 'fa-solid fa-cloud-moon-rain icon-gray' },
    { code: '10d', class: 'fa-solid fa-cloud-showers-heavy icon-blue' },
    { code: '10n', class: 'fa-solid fa-cloud-showers-heavy icon-dark-blue' },
    { code: '11d', class: 'fa-solid fa-bolt-lightning icon-gold' },
    { code: '11d', class: 'fa-solid fa-bolt-lightning icon-dark-gray' },
    { code: '13d', class: 'fa-solid fa-snowflake icon-light-blue' },
    { code: '13n', class: 'fa-solid fa-snowflake icon-gray' },
    { code: '50d', class: 'fa-solid fa-smog icon-gray' },
    { code: '50n', class: 'fa-solid fa-smog icon-dark-gray' },
  ];
  let weather = '';

  Object(icons).forEach((icon) => {
    if (icon.code === iconCode) {
      weather = icon.class;
    }
  });
  return weather;
};

const capitalize = (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1);

export {
  kelvinToCelcius, meterToKm, degToCompass, convertTZ, convertToLocalTZ, weatherToIcon, capitalize,
};
