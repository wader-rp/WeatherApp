import React from "react";
import {
  DetailsBoxStyled,
  Sunset,
  Sunrise,
  FeelsLike,
  Pressure,
  DetailsData,
  Wind,
  WindSpeed,
  DayTimeContainer,
  DataAndWindWrapper,
  ProgressBar,
  SunPlacement,
  SunriseAndSunsetWrapper,
} from "./DetailsBoxStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DateConverterForHours from "../../DateConverter/DateConverterForHours";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import calculateDayProgression from "../../../helpers/CalculateDayProgression";

const DetailsBox = ({
  sunset,
  sunrise,
  pressure,
  feelsLike,
  windSpeed,
  windDeg,
  timezone,
  currentTime,
}) => {
  const sunPercent = calculateDayProgression(
    sunrise,
    sunset,
    currentTime,
    timezone
  );
  return (
    <DetailsBoxStyled>
      <DataAndWindWrapper>
        <DetailsData>
          <FeelsLike>FeelsLike: {Math.round(feelsLike)} °C</FeelsLike>
          <Pressure>Pressure: {pressure} HPa</Pressure>
        </DetailsData>
        <Wind>
          <FontAwesomeIcon
            icon={faArrowUp}
            size={"5x"}
            color={"white"}
            transform={{ rotate: `${windDeg}` }}
          />
          <WindSpeed>{windSpeed} m/s</WindSpeed>
        </Wind>
      </DataAndWindWrapper>
      <DayTimeContainer>
        <ProgressBar>
          <SunPlacement pos={`${sunPercent}%`} />
        </ProgressBar>
        <SunriseAndSunsetWrapper>
          <Sunrise>Sunrise: {DateConverterForHours(sunrise, timezone)}</Sunrise>
          <Sunset>Sunset: {DateConverterForHours(sunset, timezone)}</Sunset>
        </SunriseAndSunsetWrapper>
      </DayTimeContainer>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
