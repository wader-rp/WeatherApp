import {
  SingleDayBoxStyled,
  DayTemperature,
  MiniIconAndTempWrapper,
  MiniDate,
} from "./SingleDayBoxStyled";
import MiniWeatherIcon from "../../WeatherIcons/MiniWeatherIcons";
import dateConverter from "../../../DateConverter/convertDate";

const SingleDayBox = ({ dayInfo, handleOnCLick }) => (
  <SingleDayBoxStyled onClick={handleOnCLick}>
    <MiniDate>{dateConverter(dayInfo.date)}</MiniDate>
    <MiniIconAndTempWrapper>
      <MiniWeatherIcon icon={dayInfo.icon} />

      <DayTemperature>{Math.round(dayInfo.mainTemp)} °C</DayTemperature>
    </MiniIconAndTempWrapper>
  </SingleDayBoxStyled>
);

export default SingleDayBox;
