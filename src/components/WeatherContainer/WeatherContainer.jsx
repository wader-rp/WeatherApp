import React from "react";
import { WeatherContainerStyled } from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";

const WeatherContainer = ({ weatherData, city }) => {
  return (
    <WeatherContainerStyled>
      <MainBox weatherData={weatherData} />
      <DetailsBox />
      <FiveDaysForecastBox weatherData={weatherData} city={city} />
    </WeatherContainerStyled>
  );
};

export default WeatherContainer;
