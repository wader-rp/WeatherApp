import React, { useState } from "react";
import {
  WeatherContainerStyled,
  MainAndDetailsWrapper,
} from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";

const initialWeatherData = (weatherData) => ({
  main: weatherData.main,
  name: weatherData.name,
  country: weatherData.sys.country,
  date: weatherData.dt,
  icon: weatherData.weather[0].icon,
  mainTemp: weatherData.main.temp,
  tempMax: weatherData.main.temp_max,
  tempMin: weatherData.main.temp_min,
  windDeg: weatherData.wind.deg,
  windSpeed: weatherData.wind.speed,
  feelsLike: weatherData.main.feels_like,
  pressure: weatherData.main.pressure,
  sunrise: weatherData.sys.sunrise,
  sunset: weatherData.sys.sunse,
});
const WeatherContainer = ({ weatherData }) => {
  const [activeData, setActiveData] = useState(initialWeatherData(weatherData));

  const pickActiveDataFromFiveDays = (data) => {
    console.log(data);
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
      sunrise: data.sunrise,
      sunset: data.sunset,
    }));
  };
  const backToMainData = () => {
    setActiveData(initialWeatherData(weatherData));
  };
  return (
    <WeatherContainerStyled>
      <MainAndDetailsWrapper>
        <MainBox
          main={activeData.main}
          name={activeData.name}
          country={activeData.country}
          date={activeData.date}
          icon={activeData.icon}
          mainTemp={activeData.mainTemp}
          tempMax={activeData.tempMax}
          tempMin={activeData.tempMin}
        />
        <DetailsBox
          windDeg={activeData.windDeg}
          windSpeed={activeData.windSpeed}
          feelsLike={activeData.feelsLike}
          pressure={activeData.pressure}
          sunrise={activeData.sunrise}
          sunset={activeData.sunset}
        />
      </MainAndDetailsWrapper>
      <FiveDaysForecastBox
        weatherData={weatherData}
        onSelect={pickActiveDataFromFiveDays}
      />
    </WeatherContainerStyled>
  );
};

export default WeatherContainer;
