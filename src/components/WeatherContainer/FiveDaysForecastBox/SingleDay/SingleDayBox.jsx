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
  const icon = (day) => {
    if (day.icon) {
      return day.icon;
    } else {
      return day.weather[0].icon;
    }
  };
  const temp = (day) => {
    if (day.mainTemp) {
      return Math.floor(day.mainTemp);
    } else {
      return Math.floor(day.temp.day);
    }
  };
  const date = (day) => {
    if (day.date) {
      return DateConverter(day.date);
    } else {
      return DateConverter(day.dt);
    }
  };
  return (
    <SingleDayBoxStyled onClick={onClick}>
      <MiniDate>{date(day)}</MiniDate>
      <MiniIconAndTempWrapper>
        <MiniWeatherIcon icon={icon(day)} />

        <DayTemperature>{temp(day)} °C</DayTemperature>
      </MiniIconAndTempWrapper>
    </SingleDayBoxStyled>
  );
};

export default SingleDayBox;
