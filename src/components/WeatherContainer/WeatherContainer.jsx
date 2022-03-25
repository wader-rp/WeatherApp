import React, { useState } from "react";
import {
  WeatherContainerStyled,
  MainAndDetailsWrapper,
} from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";
import { initialWeatherData } from "../../data/initialWeatherData";

const WeatherContainer = ({ weatherData }) => {
  const [activeData, setActiveData] = useState(initialWeatherData(weatherData));

  return (
    <WeatherContainerStyled>
      <MainAndDetailsWrapper>
        <MainBox
          main={activeData.main}
          name={activeData.name}
          country={activeData.country}
          date={activeData.date}
          icon={activeData.icon}
          mainTemp={activeData.mainTemp}
          tempMax={activeData.tempMax}
          tempMin={activeData.tempMin}
        />
        <DetailsBox
          windDeg={activeData.windDeg}
          windSpeed={activeData.windSpeed}
          feelsLike={activeData.feelsLike}
          pressure={activeData.pressure}
          sunrise={activeData.sunrise}
          sunset={activeData.sunset}
          humidity={activeData.humidity}
          timezone={activeData.timezone}
          currentTime={activeData.date}
          cloudiness={activeData.cloudiness}
          visibility={activeData.visibility}
        />
      </MainAndDetailsWrapper>
      <FiveDaysForecastBox
        weatherData={weatherData}
        activeData={activeData}
        setActiveData={setActiveData}
      />
    </WeatherContainerStyled>
  );
};

export default WeatherContainer;
