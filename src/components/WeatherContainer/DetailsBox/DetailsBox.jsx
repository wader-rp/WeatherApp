import React from "react";
import {
  DetailsBoxStyled,
  Sunset,
  Sunrise,
  FeelsLike,
  Pressure,
  DetailsDataWrapper,
} from "./DetailsBoxStyled";
import DateConverterForHours from "../../DateConverter/DateConverterForHours";

const DetailsBox = ({ weatherData }) => {
  return (
    <DetailsBoxStyled>
      <DetailsDataWrapper>
        <FeelsLike>
          FeelsLike: {Math.round(weatherData.main.feels_like)} °C
        </FeelsLike>
        <Pressure>Pressure: {weatherData.main.pressure} HPa</Pressure>
        <Sunrise>
          Sunrise: {DateConverterForHours(weatherData.sys.sunrise)}
        </Sunrise>
        <Sunset>Sunset: {DateConverterForHours(weatherData.sys.sunset)}</Sunset>
      </DetailsDataWrapper>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
