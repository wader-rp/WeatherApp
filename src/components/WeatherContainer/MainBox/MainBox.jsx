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

const MainBox = ({
  name,
  tempMin,
  tempMax,
  mainTemp,
  icon,
  date,
  main,
  country,
}) => (
  <MainBoxStyled>
    <CityName>{main ? `${name} , ${country} ` : null}</CityName>
    <Date>{DateConverter(date)}</Date>
    <IconAndTempWrapper>
      <WeatherIcon icon={icon} />
      {main ? <Temperature>{Math.floor(mainTemp)} °C</Temperature> : null}
    </IconAndTempWrapper>
    <MinAndMaxTmp>
      <span>max. {Math.floor(tempMax)}°C</span>
      <span>min. {Math.floor(tempMin)}°C</span>
    </MinAndMaxTmp>
  </MainBoxStyled>
);

export default MainBox;
