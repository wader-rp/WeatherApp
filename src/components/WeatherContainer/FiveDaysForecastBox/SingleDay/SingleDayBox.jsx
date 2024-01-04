import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
  MiniDate,
} from "./SingleDayBoxStyled";
import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import dateConverter from "../../../DateConverter/convertDate";

const SingleDayBox = ({ day, onClick }) => (
  <SingleDayBoxStyled onClick={onClick}>
    <MiniDate>{dateConverter(day.date)}</MiniDate>
    <MiniIconAndTempWrapper>
      <MiniWeatherIcon icon={day.icon} />

      <DayTemperature>{Math.round(day.mainTemp)} °C</DayTemperature>
    </MiniIconAndTempWrapper>
  </SingleDayBoxStyled>
);

export default SingleDayBox;
