import React from "react";
import { LocInput, StyledHeader } from "./StyledHeader";

const Header = ({ place, setPlace }) => {
  console.log(place);

  return (
    <StyledHeader>
      <LocInput
        placeholder={"Enter city name..."}
        onChange={(event) => setPlace(event.target.value)}
        value={place}
      />
    </StyledHeader>
  );
};

export default Header;
