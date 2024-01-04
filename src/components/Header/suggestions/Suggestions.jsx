import {
  CityStyled,
  SuggestionsStyled,
} from "../../../style/CityDisplayStyled";

export const Suggestions = ({ suggestions, getSuggestionItemProps }) => (
  <SuggestionsStyled>
    {suggestions.map((suggestion) => (
      <CityStyled {...getSuggestionItemProps(suggestion, {})}>
        <span>{suggestion.description}</span>
      </CityStyled>
    ))}
  </SuggestionsStyled>
);
