import React from 'react';
import {WeatherContainerStyled} from "./WeatherContainerStyled";
import MainBox from "./MainBox/MainBox";
import DetailsBox from "./DetailsBox/DetailsBox";
import FiveDaysForecastBox from "./FiveDaysForecastBox/FiveDaysForecastBox";

const WeatherContainer = () => {
    return (
        <WeatherContainerStyled>
            <MainBox>

            </MainBox>
            <DetailsBox>

            </DetailsBox>

            <FiveDaysForecastBox>

            </FiveDaysForecastBox>
        </WeatherContainerStyled>
    );
};

export default WeatherContainer;