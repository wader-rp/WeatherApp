import React from "react";
import {
  DetailsBoxStyled,
  Sunset,
  Sunrise,
  FeelsLike,
  Pressure,
  DetailsDataWrapper,
  Wind,
  WindSpeed,
} from "./DetailsBoxStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DateConverterForHours from "../../DateConverter/DateConverterForHours";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const DetailsBox = ({ weatherData }) => {
  return (
    <DetailsBoxStyled>
      <Wind>
        <FontAwesomeIcon
          icon={faArrowUp}
          size={"5x"}
          color={"white"}
          transform={{ rotate: `${weatherData.wind.deg}` }}
        />
        <WindSpeed>{weatherData.wind.speed} m/s</WindSpeed>
      </Wind>
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
