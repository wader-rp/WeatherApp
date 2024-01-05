import { AppStyled, MainPage, DotsStyled, Error404 } from "./App.styled";
import { GlobalStyles } from "./style/GlobalStyles";
import Header from "./components/Header/Header";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

export const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY_WEATHER;

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        setIsLoading(true);

        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&exclude=minutely,alerts`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setWeatherData(data);
            setError(null);
          })
          .catch((error) => {
            setError("Bad request");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    };
    setWeatherData({});
    const debounce = setTimeout(fetchData, 1500);

    return () => clearTimeout(debounce);
  }, [city, API_KEY]);

  return (
    <>
      <GlobalStyles />
      <AppStyled />
      <MainPage>
        <Header city={city} setCity={setCity} />

        {isLoading ? (
          <DotsStyled>
            <MutatingDots
              type={"Circles"}
              color={"rgb(1, 55, 119)"}
              secondaryColor={"rgba(218, 150, 0, 0.87)"}
              height={140}
              width={150}
              radius={16}
            />
          </DotsStyled>
        ) : weatherData.name ? (
          <WeatherContainer weatherData={weatherData} />
        ) : error ? (
          <Error404>
            Please enter valid city name or choose one from the list
          </Error404>
        ) : null}
      </MainPage>
    </>
  );
};
