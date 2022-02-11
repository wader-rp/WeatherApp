import React from "react";
import { LocInput, StyledHeader, ClearInput } from "./StyledHeader";

const Header = ({ place, setPlace }) => {
  return (
    <StyledHeader>
      <LocInput
        placeholder={"Enter city name..."}
        onChange={(event) => setPlace(event.target.value)}
        value={place}
      />
      <ClearInput onClick={() => setPlace("")}>X</ClearInput>
    </StyledHeader>
  );
};

export default Header;
