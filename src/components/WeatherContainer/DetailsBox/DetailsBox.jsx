import React from "react";
import {
  DetailsBoxStyled,
  DetailsData,
  Wind,
  DayTimeContainer,
  DataAndWindWrapper,
  ProgressBar,
  SunPlacement,
  SunriseAndSunsetWrapper,
  DataDisplay,
  DataInfo,
  DetailsDataWrapper,
  WindSpeed,
  SunriseSunset,
  SunriseSunsetHour,
} from "./DetailsBoxStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dateConverterForHours from "../../DateConverter/dateConverterForHours";
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
  humidity,
  currentTime,
  cloudiness,
}) => {
  const sunPercent = calculateDayProgression(
    sunrise,
    sunset,
    currentTime,
    timezone
  );
  console.log(sunPercent);
  return (
    <DetailsBoxStyled>
      <DataAndWindWrapper>
        <DetailsData>
          <DetailsDataWrapper>
            <DataDisplay>
              <DataInfo>FeelsLike</DataInfo> {Math.round(feelsLike)} °C
            </DataDisplay>
            <DataDisplay>
              <DataInfo>Pressure</DataInfo> {pressure} HPa
            </DataDisplay>
          </DetailsDataWrapper>
          <DetailsDataWrapper>
            <DataDisplay>
              <DataInfo>Humidity</DataInfo> {humidity}%
            </DataDisplay>
            <DataDisplay>
              <DataInfo>Cloudiness</DataInfo> {cloudiness}%
            </DataDisplay>
          </DetailsDataWrapper>
        </DetailsData>
        <Wind>
          Wind
          <FontAwesomeIcon
            icon={faArrowUp}
            size={"5x"}
            color={"#ffd579"}
            transform={{ rotate: `${windDeg}` }}
          />
          <WindSpeed>{windSpeed} m/s</WindSpeed>
        </Wind>
      </DataAndWindWrapper>
      <DayTimeContainer>
        {sunPercent > 0 && sunPercent < 100 && (
          <ProgressBar>
            <SunPlacement pos={`${sunPercent}%`} />
          </ProgressBar>
        )}
        <SunriseAndSunsetWrapper>
          <SunriseSunset>
            Sunrise:{" "}
            <SunriseSunsetHour>
              {dateConverterForHours(sunrise, timezone)}
            </SunriseSunsetHour>
          </SunriseSunset>
          <SunriseSunset>
            Sunset:{" "}
            <SunriseSunsetHour>
              {dateConverterForHours(sunset, timezone)}
            </SunriseSunsetHour>
          </SunriseSunset>
        </SunriseAndSunsetWrapper>
      </DayTimeContainer>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
