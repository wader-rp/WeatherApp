import React, { useEffect, useState } from "react";
import { FiveDaysForecastBoxStyled } from "./FiveDaysForecastBoxStyled";
import SingleDayBox from "./SingleDay/SingleDayBox";
import { parseFiveDaysDataToRequiredFormat } from "../../../helpers/parseFiveDaysDataToRequiredFormat";
import { exchangeData } from "../../../helpers/exchangeData";
import { handleSelect } from "../../../helpers/handleSelect";

const FiveDaysForecastBox = ({ weatherData, activeData, setActiveData }) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const API_KEY_FIVE_DAYS = process.env.REACT_APP_API_KEY_WEATHER;
  const { lat, lon } = weatherData.coord;

  useEffect(() => {
    let sub = true;
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY_FIVE_DAYS}`
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
  }, [weatherData]);

  return (
    <FiveDaysForecastBoxStyled>
      {fiveDayForecast.map((day, index) => (
        <SingleDayBox
          day={day}
          key={index}
          onClick={() => {
            handleSelect(day, setActiveData);
            exchangeData(
              index,
              activeData,
              fiveDayForecast,
              setFiveDayForecast
            );
          }}
        />
      ))}
    </FiveDaysForecastBoxStyled>
  );
};

export default FiveDaysForecastBox;
