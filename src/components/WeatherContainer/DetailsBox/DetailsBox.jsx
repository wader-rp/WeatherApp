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

const DetailsBox = (props) => {
  return (
    <DetailsBoxStyled>
      <Wind>
        <FontAwesomeIcon
          icon={faArrowUp}
          size={"5x"}
          color={"white"}
          transform={{ rotate: `${props.windDeg}` }}
        />
        <WindSpeed>{props.windSpeed} m/s</WindSpeed>
      </Wind>
      <DetailsDataWrapper>
        <FeelsLike>FeelsLike: {Math.round(props.feelsLike)} °C</FeelsLike>
        <Pressure>Pressure: {props.pressure} HPa</Pressure>
        <Sunrise>Sunrise: {DateConverterForHours(props.sunrise)}</Sunrise>
        <Sunset>Sunset: {DateConverterForHours(props.sunset)}</Sunset>
      </DetailsDataWrapper>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
