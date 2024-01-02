import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CitiesDropdownStyled,
  CitiesStyled,
  CitiesDropdownWrapper,
} from "./CitiesDropdownStyled";
import CitiesList from "../../citiesList/CitiesList";

export const CitiesDropdown = ({ setCity }) => {
  const [isCitiesListOpen, setIsCitiesListOpen] = useState(false);

  const handleListOpen = () => {
    setIsCitiesListOpen((prev) => !prev);
  };

  return (
    <CitiesDropdownWrapper>
      <CitiesDropdownStyled style={{ cursor: "pointer" }}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          color={"rgba(1, 58, 224, 0.5)"}
          onClick={handleListOpen}
        />
        <CitiesStyled>Cities</CitiesStyled>
      </CitiesDropdownStyled>
      {isCitiesListOpen ? (
        <CitiesList
          setCity={setCity}
          setIsCitiesListOpen={setIsCitiesListOpen}
        />
      ) : null}
    </CitiesDropdownWrapper>
  );
};
