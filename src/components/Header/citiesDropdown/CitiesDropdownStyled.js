import styled from "styled-components";

export const CitiesDropdownStyled = styled.div`
  width: 279px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  text-wrap: wrap;

  @media (max-width: 1440px) {
    justify-content: center;
  }
`;
export const CitiesStyled = styled.h2`
  color: white;
  letter-spacing: 4px;
  align-items: center;
`;
export const CitiesDropdownWrapper = styled.div`
  position: relative;
`;
