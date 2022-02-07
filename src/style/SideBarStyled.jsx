import styled from "styled-components";

export const SideBarStyled = styled.div`
  position: absolute;
  display: flex;
  left: 4rem;
  top: 1.5rem;
  align-items: center;

  min-width: 1rem;
  max-width: 7rem;
  flex-direction: column;
  height: 85%;
  font-size: 2rem;
`;

export const CitiesList = styled.div`
  height: 100%;
  min-width: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const StyledCity = styled.div`
  color: #f8f8f8;
  border: 1px #757575 solid;
  border-radius: 10px;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(80, 80, 80, 0.21);
    cursor: pointer;
    transform: scale(1.04);
  }
`;
