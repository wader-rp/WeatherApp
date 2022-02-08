import React from "react";
import { SingleDayBoxStyled, DayTemperature } from "./SingleDayBoxStyled";

const SingleDayBox = ({ day }) => {
  console.log(day);
  return (
    <SingleDayBoxStyled>
      <DayTemperature>{Math.floor(day.temp.day)} °C</DayTemperature>
    </SingleDayBoxStyled>
  );
};

export default SingleDayBox;
