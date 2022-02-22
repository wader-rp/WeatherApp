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
  color: #a8a8a8;
  border: 1px #545454 solid;
  border-radius: 10px;
  padding: 6px 10px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;

    background-color: rgba(79, 79, 79, 0.49);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 200ms ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;
