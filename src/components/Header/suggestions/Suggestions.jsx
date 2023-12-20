import { CityStyled } from "../../../style/CityDisplayStyled";

export const Suggestions = ({ suggestions, getSuggestionItemProps }) => (
  <>
    {suggestions.map((suggestion) => (
      <CityStyled {...getSuggestionItemProps(suggestion, {})}>
        <span>{suggestion.description}</span>
      </CityStyled>
    ))}
  </>
);
