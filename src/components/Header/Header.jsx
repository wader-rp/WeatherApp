import React from "react";
import {
  LocInput,
  StyledHeader,
  ClearInput,
  HeaderAndSuggestionsWrapper,
} from "./StyledHeader";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { useState } from "react";
import { StyledCity } from "../../style/SideBarStyled";
const Header = ({ place, setPlace }) => {
  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const ll = await getLatLng(result[0]);
    console.log(ll);
    setPlace(value);
    setCoords(ll);
  };
  console.log(coords);
  console.log(place);
  return (
    <PlacesAutocomplete
      value={place}
      onChange={setPlace}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <StyledHeader>
          <HeaderAndSuggestionsWrapper>
            <LocInput
              {...getInputProps({
                placeholder: "Search Places ...",
              })}
            />
            <ClearInput onClick={() => setPlace("")}>X</ClearInput>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                console.log(suggestions);
                return (
                  <StyledCity {...getSuggestionItemProps(suggestion, {})}>
                    <span>{suggestion.description}</span>
                  </StyledCity>
                );
              })}
            </div>
          </HeaderAndSuggestionsWrapper>
        </StyledHeader>
      )}
    </PlacesAutocomplete>
  );
};

/* <StyledHeader>
      <LocInput
        placeholder={"Enter city name..."}
        onChange={(event) => setPlace(event.target.value)}
        value={place}
      />
      <ClearInput onClick={() => setPlace("")}>X</ClearInput>
    </StyledHeader>
  );
};
*/
export default Header;
