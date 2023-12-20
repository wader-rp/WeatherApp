import React from "react";
import { CitiesList, SideBarStyled } from "../../style/SideBarStyled";
import { CityStyled } from "../../style/CityDisplayStyled";
import { cities } from "../../data/cities";

const SideBar = ({ setCity }) => {
  return (
    <SideBarStyled>
      <CitiesList>
        {cities &&
          cities.map((city) => (
            <CityStyled key={city} onClick={() => setCity(city)}>
              {city}
            </CityStyled>
          ))}
      </CitiesList>
    </SideBarStyled>
  );
};

export default SideBar;
