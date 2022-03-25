import React from "react";
import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
  MiniDate,
} from "./SingleDayBoxStyled";
import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import dateConverter from "../../../DateConverter/DateConverter";

const SingleDayBox = ({ day, onClick }) => {
  return (
    <SingleDayBoxStyled onClick={onClick}>
      <MiniDate>{dateConverter(day.date)}</MiniDate>
      <MiniIconAndTempWrapper>
        <MiniWeatherIcon icon={day.icon} />

        <DayTemperature>{day.mainTemp} °C</DayTemperature>
      </MiniIconAndTempWrapper>
    </SingleDayBoxStyled>
  );
};

export default SingleDayBox;
