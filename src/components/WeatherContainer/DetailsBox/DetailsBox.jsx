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
  DetailsDataWrapper,
  WindSpeed,
  SunriseSunset,
  SunriseSunsetHour,
} from "./DetailsBoxStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import convertTimestampToHours from "../../DateConverter/convertTimestampToHours";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import calculateDayProgression from "../../../helpers/calculateDayProgression";
import { WeatherContainerDetailsData } from "../WeatherContainerDetailsData";
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

  return (
    <DetailsBoxStyled>
      <DataAndWindWrapper>
        <DetailsData>
          <DetailsDataWrapper>
            <WeatherContainerDetailsData
              desc={"FeelsLike"}
              descValue={`${Math.round(feelsLike)}°C`}
            />
            <WeatherContainerDetailsData
              desc={"Pressure"}
              descValue={`${pressure}HPa`}
            />
            <WeatherContainerDetailsData
              desc={"Humidity"}
              descValue={`${humidity}%`}
            />
            <WeatherContainerDetailsData
              desc={"Cloudiness"}
              descValue={`${cloudiness}%`}
            />
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
              {convertTimestampToHours(sunrise, timezone)}
            </SunriseSunsetHour>
          </SunriseSunset>
          <SunriseSunset>
            Sunset:{" "}
            <SunriseSunsetHour>
              {convertTimestampToHours(sunset, timezone)}
            </SunriseSunsetHour>
          </SunriseSunset>
        </SunriseAndSunsetWrapper>
      </DayTimeContainer>
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
