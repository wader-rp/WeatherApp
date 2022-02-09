import React from "react";
import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
} from "./SingleDayBoxStyled";

import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import { IconAndTempWrapper } from "../../MainBox/MainBoxStyled";

const SingleDayBox = ({ day, index }) => {
  console.log(day);
  return (
    <SingleDayBoxStyled>
      <MiniIconAndTempWrapper>
        <MiniWeatherIcon icon={day.weather[0].icon} />
        <DayTemperature>{Math.floor(day.temp.day)} °C</DayTemperature>
      </MiniIconAndTempWrapper>
    </SingleDayBoxStyled>
  );
};

export default SingleDayBox;
