import { AppStyled, MainPage, DotsStyled, Error404 } from "./App.styled";
import { GlobalStyles } from "./style/GlobalStyles";
import SideBar from "./components/CitiesList/SideBar";
import Header from "./components/Header/Header";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

export const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY_WEATHER;

  useEffect(() => {
    if (city) {
      setIsLoading(true);
    }
    const debounce = setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&exclude=minutely,alerts`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setIsLoading(false);
        });
    }, 1500);
    console.log(weatherData);
    return () => clearTimeout(debounce);
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <AppStyled />
      <MainPage>
        <Header place={city} setPlace={setCity} />
        <SideBar setCity={setCity} />

        {isLoading ? (
          <DotsStyled>
            <MutatingDots
              type={"Circles"}
              color={"#8f8f8f"}
              secondaryColor={"#004600"}
              height={120}
              width={120}
              radius={14}
            />
          </DotsStyled>
        ) : weatherData.name ? (
          <WeatherContainer weatherData={weatherData} city={city} />
        ) : city.length > 0 ? (
          <Error404>Wrong city name. Please try again...</Error404>
        ) : null}
      </MainPage>
    </>
  );
};
