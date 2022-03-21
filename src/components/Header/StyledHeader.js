import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocInput = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  min-width: 30%;
  min-height: 1.5rem;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }
`;

export const ClearInput = styled.div`
  color: #757575;
  display: flex;

  align-items: center;
  overflow: visible;
  margin-left: -2rem;
  cursor: pointer;
  z-index: 2;
`;
