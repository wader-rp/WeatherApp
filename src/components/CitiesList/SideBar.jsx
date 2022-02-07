import React from "react";
import {
  CitiesList,
  SideBarStyled,
  StyledCity,
} from "../../style/SideBarStyled";
import { cities } from "../../data/cities";

const SideBar = ({ setCity }) => {
  return (
    <SideBarStyled>
      <CitiesList>
        {cities &&
          cities.map((city) => (
            <StyledCity key={city} onClick={() => setCity(city)}>
              {city}
            </StyledCity>
          ))}
      </CitiesList>
    </SideBarStyled>
  );
};

export default SideBar;
