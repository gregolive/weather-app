const queryWeatherData = async (query) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=111fdbb7d75b9450d8175d0fb69e49cc`, { mode: 'cors' });
  return response.json();
};

export default queryWeatherData;
