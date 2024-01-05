import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
  MiniDate,
} from "./SingleDayBoxStyled";
import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import dateConverter from "../../../DateConverter/convertDate";

const SingleDayBox = ({ dayInfo, handleOnClick }) => (
  <SingleDayBoxStyled onClick={handleOnClick}>
    <MiniDate>{dateConverter(dayInfo.date)}</MiniDate>
    <MiniIconAndTempWrapper>
      <MiniWeatherIcon icon={dayInfo.icon} />

      <DayTemperature>{Math.round(dayInfo.mainTemp)} °C</DayTemperature>
    </MiniIconAndTempWrapper>
  </SingleDayBoxStyled>
);

export default SingleDayBox;
