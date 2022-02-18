import React, { useEffect, useState } from "react";
import { FiveDaysForecastBoxStyled } from "./FiveDaysForecastBoxStyled";
import SingleDayBox from "./SingleDay/SingleDayBox";

const FiveDaysForecastBox = ({ weatherData, onSelect }) => {
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
          setFiveDayForecast(data.daily.splice(1, 5));
        }
      });
    return () => (sub = false);
  }, [weatherData]);

  const handleSelect = ({
    dt,
    sunrise,
    sunset,
    temp,
    wind_deg,
    wind_speed,
    feels_like,
    pressure,
    weather,
  }) => {
    console.log("dupa");
    onSelect({
      date: dt,
      icon: weather[0].icon,
      mainTemp: temp.day,
      tempMax: temp.max,
      tempMin: temp.min,
      windDeg: wind_deg,
      windSpeed: wind_speed,
      feelsLike: feels_like,
      pressure,
      sunrise,
      sunset,
    });
  };
  return (
    <FiveDaysForecastBoxStyled>
      {fiveDayForecast.map((day, index) => (
        <SingleDayBox day={day} key={index} onClick={() => handleSelect(day)} />
      ))}
    </FiveDaysForecastBoxStyled>
  );
};

export default FiveDaysForecastBox;
