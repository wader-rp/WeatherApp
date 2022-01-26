import { AppStyled, MainPage } from "./App.styled";
import { GlobalStyles } from "./style/GlobalStyles";
import SideBar from "./components/CitiesList/SideBar";
import Header from "./components/Header/Header";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import { useEffect, useState } from "react";

export const App = () => {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (city.length)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log(weatherData);
        });
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <AppStyled />
      <MainPage>
        <Header place={city} setPlace={setCity} />
        <SideBar></SideBar>
        <WeatherContainer></WeatherContainer>
      </MainPage>
    </>
  );
};
