import React, { useEffect, useState } from "react";
import { FiveDaysForecastBoxStyled } from "./FiveDaysForecastBoxStyled";
import SingleDayBox from "./SingleDay/SingleDayBox";

const FiveDaysForecastBox = ({ weatherData, onSelect }) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const API_KEY_FIVE_DAYS = process.env.REACT_APP_API_KEY_WEATHER;
  const { lat, lon } = weatherData.coord;
  const initData = ({ weatherData }) => ({
    dt: weatherData.dt,
  });
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

  console.log(weatherData);

  const handleSelect = (
    index,
    {
      dt,
      sunrise,
      sunset,
      temp,
      wind_deg,
      wind_speed,
      feels_like,
      pressure,
      weather,
      humidity,
      clouds,
    }
  ) => {
    onSelect({
      date: dt,
      icon: weather[0].icon,
      mainTemp: temp.day,
      tempMax: temp.max,
      tempMin: temp.min,
      windDeg: wind_deg,
      windSpeed: wind_speed,
      feelsLike: feels_like.day,
      pressure,
      sunrise,
      sunset,
      humidity,
      cloudiness: clouds,
    });
    deleteDayFromFiveDaysForecast(index);
  };

  const deleteDayFromFiveDaysForecast = (index) => {
    const newArr = [...fiveDayForecast];
    newArr.slice(index, 1);
    setFiveDayForecast(newArr);
    addCurrentDayToFiveDaysForecast(weatherData);
  };

  const addCurrentDayToFiveDaysForecast = (weatherData) => {
    const newArrAdd = [...fiveDayForecast];
    const temp = {
      day: weatherData.main.temp,
    };
    newArrAdd.unshift({
      dt: weatherData.dt,
      weather: weatherData.weather,
      temp: temp,
    });
    setFiveDayForecast(newArrAdd);
  };
  return (
    <FiveDaysForecastBoxStyled>
      {fiveDayForecast.map((day, index) => (
        <SingleDayBox
          day={day}
          key={index}
          onClick={() => handleSelect(index, day)}
        />
      ))}
    </FiveDaysForecastBoxStyled>
  );
};

export default FiveDaysForecastBox;
