import React from 'react';
import {CityName, Date, MainBoxStyled, MinAndMaxTmp, Temperature} from "./MainBoxStyled";
import {CitiesList} from "../../../style/SideBarStyled";

const MainBox = () => {
    return (
        <MainBoxStyled>
            <CityName>
                NEW YORK , US
            </CityName>
            <Date>
                2.21.2022
            </Date>
            <Temperature>
                2°C
            </Temperature>
            <MinAndMaxTmp>
                <span>min. 2°C</span>
                <span>max. 5°C</span>
            </MinAndMaxTmp>
        </MainBoxStyled>
    );
};

export default MainBox;