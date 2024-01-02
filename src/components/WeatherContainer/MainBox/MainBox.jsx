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
import convertDate from "../../DateConverter/convertDate";

const MainBox = ({ name, tempMin, tempMax, mainTemp, icon, date, country }) => (
  <MainBoxStyled>
    <CityName>{`${name} , ${country}`}</CityName>
    <Date>{convertDate(date)}</Date>
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
