import React from "react";
import WeatherIcon from "../WeatherIcons/WeatherIcons";

import {
  CityName,
  Date,
  MainBoxStyled,
  MinAndMaxTmp,
  Temperature,
  IconAndTempWrapper,
} from "./MainBoxStyled";
import DateConverter from "../../DateConverter/DateConverter";

const MainBox = ({ name, tempMin, tempMax, mainTemp, icon, date, country }) => (
  <MainBoxStyled>
    <CityName>{`${name} , ${country}`}</CityName>
    <Date>{DateConverter(date)}</Date>
    <IconAndTempWrapper>
      <WeatherIcon icon={icon} />
      <Temperature>{Math.floor(mainTemp)} °C</Temperature>
    </IconAndTempWrapper>
    <MinAndMaxTmp>
      <span>min. {Math.floor(tempMin)}°C</span>
      <span>max. {Math.floor(tempMax)}°C</span>
    </MinAndMaxTmp>
  </MainBoxStyled>
);

export default MainBox;
