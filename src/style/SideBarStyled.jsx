import styled from "styled-components";

export const SideBarStyled = styled.div`
  position: absolute;
  display: flex;
  left: -2.1rem;
  top: 1.5rem;
  align-items: center;
  min-width: 1rem;
  flex-direction: column;
  height: 85%;
  font-size: 2rem;
  padding-left: 1.5rem;
`;

export const CitiesList = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const StyledCity = styled.div`
  color: #fdfdfd;
  border: 2px rgba(218, 150, 0, 0.69) solid;
  background-color: rgba(69, 141, 252, 0.6);
  border-radius: 10px;
  padding: 7px 15px 7px 15px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 0;
  box-shadow: 3px 3px 7px rgb(1, 55, 119);

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    right: -1px;
    bottom: -1px;
    border-radius: 10px;
    background-color: rgba(218, 150, 0, 0.5);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 200ms ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    transform: scaleY(1);
  }
`;
