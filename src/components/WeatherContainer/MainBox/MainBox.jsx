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

const MainBox = (props) => {
  return (
    <MainBoxStyled>
      <CityName>
        {props.main ? `${props.name} , ${props.country} ` : null}
      </CityName>
      <Date>{DateConverter(props.date)}</Date>
      <IconAndTempWrapper>
        <WeatherIcon icon={props.icon} />
        {props.main ? (
          <Temperature>{Math.floor(props.mainTemp)} °C</Temperature>
        ) : null}
      </IconAndTempWrapper>
      <MinAndMaxTmp>
        <span>max. {Math.floor(props.tempMax)}°C</span>
        <span>min. {Math.floor(props.tempMin)}°C</span>
      </MinAndMaxTmp>
    </MainBoxStyled>
  );
};

export default MainBox;
