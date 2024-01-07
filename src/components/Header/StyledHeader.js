import styled from "styled-components";
import { borderRadius, boxShadow } from "../../App.styled";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 3rem;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const CitiesDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CityInputStyled = styled.input`
  border: 2px rgba(218, 150, 0, 0.87) solid;
  background-color: rgba(1, 58, 224, 0.3);
  padding: 0.45rem 1rem;
  font-size: 1.5rem;
  width: 26rem;
  color: white;
  letter-spacing: 4px;
  font-weight: 600;

  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  z-index: 1;

  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(69, 141, 252, 0.16);
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    width: 17rem;
  }
`;

export const ClearInput = styled.div`
  position: absolute;
  color: rgba(218, 150, 0, 0.87);
  top: 25%;
  left: 90%;
  cursor: pointer;
  z-index: 2;
  font-weight: bolder;
`;

export const HeaderAndSuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const AutocompleteDropdownStyled = styled.div``;

export const WeatherAppLogo = styled.img`
  width: 5rem;
`;

export const LogoAndTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherAppTitle = styled.span`
  letter-spacing: 2px;
  color: #efefef;
  font-size: 2rem;
`;
