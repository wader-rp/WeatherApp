export const handleOneDaySelect = (data, setActiveData) => {
  setActiveData((prevState) => ({
    ...prevState,
    date: data.date,
    icon: data.icon,
    mainTemp: data.mainTemp,
    tempMax: data.tempMax,
    tempMin: data.tempMin,
    windDeg: data.windDeg,
    windSpeed: data.windSpeed,
    feelsLike: data.feelsLike,
    pressure: data.pressure,
    humidity: data.humidity,
    cloudiness: data.cloudiness,
    visibility: data.visibility,
    sunrise: data.sunrise,
    sunset: data.sunset,
    timezone: data.timezone,
  }));
};
