import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocInput = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  min-width: 30%;
  min-height: 2rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 30px;
  box-shadow: 6px 6px 15px rgb(0, 0, 0);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
  }
  &:focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div``;
