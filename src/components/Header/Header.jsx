import React from "react";
import {
  LocInputStyled,
  HeaderStyled,
  ClearInput,
  HeaderAndSuggestionsWrapper,
  AutocompleteDropdownStyled,
  InputWrapper,
} from "./StyledHeader";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { useState } from "react";
import { Suggestions } from "./suggestions/Suggestions";
const Header = ({ place, setPlace }) => {
  const [coords, setCoords] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const latAndLng = await getLatLng(result[0]);
    setPlace(value);
    setCoords(latAndLng);
  };

  return (
    <PlacesAutocomplete
      value={place}
      onChange={setPlace}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <HeaderStyled>
          <HeaderAndSuggestionsWrapper>
            <InputWrapper>
              <LocInputStyled
                {...getInputProps({
                  placeholder: "Search Places ...",
                })}
              ></LocInputStyled>
              <ClearInput onClick={() => setPlace("")}>X</ClearInput>
            </InputWrapper>
            <AutocompleteDropdownStyled>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Suggestions
                  suggestions={suggestions}
                  getSuggestionItemProps={getSuggestionItemProps}
                />
              )}
            </AutocompleteDropdownStyled>
          </HeaderAndSuggestionsWrapper>
        </HeaderStyled>
      )}
    </PlacesAutocomplete>
  );
};

export default Header;
