import React, { useEffect, useState } from "react";
import { FiveDaysForecastBoxStyled } from "./FiveDaysForecastBoxStyled";
import SingleDayBox from "./SingleDay/SingleDayBox";
import { parseFiveDaysDataToRequiredFormat } from "../../../helpers/parseFiveDaysDataToRequiredFormat";
import { exchangeData } from "../../../helpers/exchangeData";
import { handleOneDaySelect } from "../../../helpers/handleOneDaySelect";

const FiveDaysForecastBox = ({
  weatherData,
  activeData,
  setActiveData,
  scrollBackForFullInfo,
}) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const API_KEY_FIVE_DAYS_FORECAST = process.env.REACT_APP_API_KEY_WEATHER;
  const { lat, lon } = weatherData.coord;

  useEffect(() => {
    let sub = true;
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY_FIVE_DAYS_FORECAST}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (sub) {
          setFiveDayForecast(
            data.daily.splice(1, 5).map(parseFiveDaysDataToRequiredFormat)
          );
        }
      });

    return () => (sub = false);
  }, [weatherData, API_KEY_FIVE_DAYS_FORECAST, lat, lon]);

  const handleOnClick = (day, index) => {
    handleOneDaySelect(day, setActiveData);
    exchangeData(index, activeData, setFiveDayForecast);
    scrollBackForFullInfo();
  };

  return (
    <FiveDaysForecastBoxStyled>
      {fiveDayForecast.map((day, index) => (
        <SingleDayBox
          day={day}
          key={index}
          onClick={() => {
            handleOnClick(day, index);
          }}
        />
      ))}
    </FiveDaysForecastBoxStyled>
  );
};

export default FiveDaysForecastBox;
