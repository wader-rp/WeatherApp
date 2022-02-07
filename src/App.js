import { AppStyled, MainPage } from "./App.styled";
import { GlobalStyles } from "./style/GlobalStyles";
import SideBar from "./components/CitiesList/SideBar";
import Header from "./components/Header/Header";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import { useEffect, useState } from "react";

export const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY_WEATHER;

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }, 1000);

    return () => clearTimeout(debounce);
  }, [city]);

  console.log(weatherData);
  return (
    <>
      <GlobalStyles />
      <AppStyled />
      <MainPage>
        <Header place={city} setPlace={setCity} />
        <SideBar setCity={setCity} />
        {weatherData.name ? (
          <WeatherContainer weatherData={weatherData} />
        ) : null}
      </MainPage>
    </>
  );
};
