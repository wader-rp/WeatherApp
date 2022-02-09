import React from "react";
import WeatherIcon from "../WeatherIcons/WeatherIcons";

import {
  CityName,
  Date,
  MainBoxStyled,
  MinAndMaxTmp,
  Temperature,
  IconAndTempWrapper,
} from "./MainBoxStyled";

const MainBox = ({ weatherData }) => {
  return (
    <MainBoxStyled>
      <CityName>
        {weatherData.main
          ? `${weatherData.name} , ${weatherData.sys.country} `
          : null}
      </CityName>
      {/*<Date>{}</Date>*/} {/*TODO: dej date*/}
      <IconAndTempWrapper>
        <WeatherIcon icon={weatherData.weather[0].icon} />
        {weatherData.main ? (
          <Temperature>{Math.floor(weatherData.main.temp)} °C</Temperature>
        ) : null}
      </IconAndTempWrapper>
      <MinAndMaxTmp>
        <span>max. {Math.floor(weatherData.main.temp_max)}°C</span>
        <span>min. {Math.floor(weatherData.main.temp_min)}°C</span>
      </MinAndMaxTmp>
    </MainBoxStyled>
  );
};

export default MainBox;
