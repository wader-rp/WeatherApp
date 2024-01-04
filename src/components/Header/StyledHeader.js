import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 3rem;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
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
  border: 5px rgba(218, 150, 0, 0.87) solid;
  background-color: rgba(1, 58, 224, 0.3);
  padding: 0.45rem 1rem;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 4px;
  font-weight: 600;
  text-shadow: 0.7px 0.7px 1.5px #000000;
  box-shadow: 4px 4px 10px rgb(1, 55, 119);
  border-radius: 10px;
  z-index: 1;

  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(69, 141, 252, 0.16);
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }
`;

export const ClearInput = styled.div`
  position: absolute;
  color: rgba(218, 150, 0, 0.87);
  top: 30%;
  left: 90%;
  overflow: visible;

  cursor: pointer;
  z-index: 2;
  font-weight: bolder;
`;

export const HeaderAndSuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const AutocompleteDropdownStyled = styled.div`
  color: black;
  max-width: 100%;
`;

export const WeatherAppLogo = styled.img`
  width: 5rem;
`;

export const LogoAndTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherAppTitle = styled.span`
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  letter-spacing: 2px;
  color: #efefef;
`;
