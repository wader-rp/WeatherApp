import React from "react";
import {
  WeatherContainerStyled,
  MainAndDetailsWrapper,
} from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";

const WeatherContainer = ({ weatherData, city }) => {
  return (
    <WeatherContainerStyled>
      <MainAndDetailsWrapper>
        <MainBox weatherData={weatherData} />
        <DetailsBox weatherData={weatherData} />
      </MainAndDetailsWrapper>
      <FiveDaysForecastBox weatherData={weatherData} city={city} />
    </WeatherContainerStyled>
  );
};

export default WeatherContainer;
