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
import { CitiesDropdown } from "./citiesDropdown/CitiesDropdown";

const Header = ({ city, setCity }) => {
  const [coords, setCoords] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const latAndLng = await getLatLng(result[0]);
    setCity(value);
    setCoords(latAndLng);
  };

  return (
    <PlacesAutocomplete value={city} onChange={setCity} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <HeaderStyled>
          <CitiesDropdown setCity={setCity} />
          <HeaderAndSuggestionsWrapper>
            <InputWrapper>
              <LocInputStyled
                {...getInputProps({
                  placeholder: "Search Places ...",
                })}
              ></LocInputStyled>
              <ClearInput onClick={() => setCity("")}>X</ClearInput>
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
