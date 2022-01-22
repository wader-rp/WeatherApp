import {AppStyled, MainPage} from "./App.styled";
import {GlobalStyles} from "./style/GlobalStyles";
import SideBar from "./components/CitiesList/SideBar";

import Header from "./components/Header/Header";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";


export const App = () => {
  return (

      <>
          <GlobalStyles />
          <AppStyled>
            <MainPage>
                <Header />
                <SideBar>

                </SideBar>
                <WeatherContainer>

                </WeatherContainer>


            </MainPage>
          </AppStyled>


      </>
  );
}
