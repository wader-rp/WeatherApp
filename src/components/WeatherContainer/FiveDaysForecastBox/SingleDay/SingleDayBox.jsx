import React from "react";
import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
  MiniDate,
} from "./SingleDayBoxStyled";

import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import DateConverter from "../../../DateConverter/DateConverter";

const SingleDayBox = ({ day, onClick }) => {
  return (
    <SingleDayBoxStyled onClick={onClick}>
      <MiniDate>{DateConverter(day.dt)}</MiniDate>
      <MiniIconAndTempWrapper>
        <MiniWeatherIcon icon={day.weather[0].icon} />
        <DayTemperature>{Math.floor(day.temp.day)} °C</DayTemperature>
      </MiniIconAndTempWrapper>
    </SingleDayBoxStyled>
  );
};

export default SingleDayBox;
