import React, { useState } from "react";
import {
  WeatherContainerStyled,
  MainAndDetailsWrapper,
} from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";

const WeatherContainer = ({ weatherData, city }) => {
  const [activeIndex, setActiveIndex] = useState(10);

  return (
    <WeatherContainerStyled>
      <MainAndDetailsWrapper>
        <MainBox
          main={weatherData.main}
          name={weatherData.name}
          country={weatherData.sys.country}
          date={weatherData.dt}
          icon={weatherData.weather[0].icon}
          mainTemp={weatherData.main.temp}
          tempMax={weatherData.main.temp_max}
          tempMin={weatherData.main.temp_min}
        />
        <DetailsBox
          windDeg={weatherData.wind.deg}
          windSpeed={weatherData.wind.speed}
          feelsLike={weatherData.main.feels_like}
          pressure={weatherData.main.pressure}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
        />
      </MainAndDetailsWrapper>
      <FiveDaysForecastBox weatherData={weatherData} city={city} />
    </WeatherContainerStyled>
  );
};

export default WeatherContainer;
