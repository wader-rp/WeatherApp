import React from "react";
import { IconWrapper, LocInput, StyledHeader } from "./StyledHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ place, setPlace }) => {
  console.log(place);

  const handleChange = (event) => setPlace(event.target.value);

  return (
    <StyledHeader>
      <LocInput
        placeholder={"Enter city name..."}
        onChange={handleChange}
        value={place}
      />
      <IconWrapper>
        <FontAwesomeIcon icon={faSearch} color={"white"} size={"1x"} />
      </IconWrapper>
    </StyledHeader>
  );
};

export default Header;
