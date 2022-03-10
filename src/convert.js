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

const capitalize = (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1);

export {
  kelvinToCelcius, meterToKm, degToCompass, convertTZ, convertToLocalTZ, capitalize,
};
