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

const DetailsBox = ({
  sunset,
  sunrise,
  pressure,
  feelsLike,
  windSpeed,
  windDeg,
}) => {
  return (
    <DetailsBoxStyled>
      <Wind>
        <FontAwesomeIcon
          icon={faArrowUp}
          size={"5x"}
          color={"white"}
          transform={{ rotate: `${windDeg}` }}
        />
        <WindSpeed>{windSpeed} m/s</WindSpeed>
      </Wind>
      <DetailsDataWrapper>
        <FeelsLike>FeelsLike: {Math.round(feelsLike)} °C</FeelsLike>
        <Pressure>Pressure: {pressure} HPa</Pressure>
        <Sunrise>Sunrise: {DateConverterForHours(sunrise)}</Sunrise>
        <Sunset>Sunset: {DateConverterForHours(sunset)}</Sunset>
      </DetailsDataWrapper>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
