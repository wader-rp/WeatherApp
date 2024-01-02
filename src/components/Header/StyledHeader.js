import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
`;
export const CitiesDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LocInputStyled = styled.input`
  border: 5px rgba(218, 150, 0, 0.87) solid;
  background-color: rgba(1, 58, 224, 0.3);
  min-height: 1.5rem;
  padding: 0.45rem 2rem;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 4px;
  font-weight: 600;
  text-shadow: 0.7px 0.7px 1.5px #000000;
  box-shadow: 4px 4px 10px rgb(1, 55, 119);
  border-radius: 10px;
  z-index: 1;

  &:hover {
    background: rgba(69, 141, 252, 0.16);
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }
`;

export const ClearInput = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  overflow: visible;
  margin-left: -2rem;
  cursor: pointer;
  z-index: 2;
  font-weight: bolder;
  color: rgba(218, 150, 0, 0.87);
  text-shadow: none;
`;

export const HeaderAndSuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const AutocompleteDropdownStyled = styled.div`
  color: black;
`;
