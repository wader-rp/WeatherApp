export const initialWeatherData = (weatherData) => ({
  main: weatherData.main,
  name: weatherData.name,
  country: weatherData.sys.country,
  date: weatherData.dt,
  icon: weatherData.weather[0].icon,
  mainTemp: weatherData.main.temp,
  tempMax: weatherData.main.temp_max,
  tempMin: weatherData.main.temp_min,
  humidity: weatherData.main.humidity,
  windDeg: weatherData.wind.deg,
  windSpeed: weatherData.wind.speed,
  feelsLike: weatherData.main.feels_like,
  pressure: weatherData.main.pressure,
  cloudiness: weatherData.clouds.all,
  visibility: weatherData.visibility,
  sunrise: weatherData.sys.sunrise,
  sunset: weatherData.sys.sunset,
  timezone: weatherData.timezone,
});
