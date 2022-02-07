import React from "react";
import {
  CityName,
  Date,
  MainBoxStyled,
  MinAndMaxTmp,
  Temperature,
} from "./MainBoxStyled";

const MainBox = ({ weatherData }) => {
  return (
    <MainBoxStyled>
      <CityName>
        {weatherData.main
          ? `${weatherData.name} , ${weatherData.sys.country} `
          : null}
      </CityName>
      <Date>{}</Date>
      {weatherData.main ? (
        <Temperature>{Math.floor(weatherData.main.temp)}°C</Temperature>
      ) : null}
      <MinAndMaxTmp>
        <span>max. {Math.floor(weatherData.main.temp_max)}°C</span>
        <span>min. {Math.floor(weatherData.main.temp_min)}°C</span>
      </MinAndMaxTmp>
    </MainBoxStyled>
  );
};

export default MainBox;
