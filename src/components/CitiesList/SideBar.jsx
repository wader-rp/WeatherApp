import React from 'react';
import {CitiesList, SideBarStyled} from "../../style/SideBarStyled";
import { CitiesArr } from "../../data/cities";

const SideBar = () => {
    return (
        <SideBarStyled>
            <CitiesList>
                {CitiesArr.map((element) => {
                    return (
                        <li>{element}</li>
                    )
                })}
            </CitiesList>
        </SideBarStyled>
    );
};

export default SideBar;