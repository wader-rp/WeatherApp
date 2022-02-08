import React, { useEffect, useState } from "react";
import { FiveDaysForecastBoxStyled } from "./FiveDaysForecastBoxStyled";
import { SingleDayBoxStyled } from "./SingleDay/SingleDayBoxStyled";
import SingleDayBox from "./SingleDay/SingleDayBox";

const FiveDaysForecastBox = ({ weatherData, city }) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const API_KEY_FIVE_DAYS = process.env.REACT_APP_API_KEY_WEATHER;
  const { lat, lon } = weatherData.coord;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY_FIVE_DAYS}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFiveDayForecast(data.daily.splice(1, 5));
      });
  }, [city]);
  console.log(fiveDayForecast);

  return (
    <FiveDaysForecastBoxStyled>
      {fiveDayForecast.map((day) => (
        <SingleDayBox day={day} />
      ))}
    </FiveDaysForecastBoxStyled>
  );
};

export default FiveDaysForecastBox;
