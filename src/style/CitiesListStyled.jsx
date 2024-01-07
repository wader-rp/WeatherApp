import styled from "styled-components";
import { borderRadius } from "../App.styled";

export const CitiesListStyled = styled.div`
  position: absolute;
  left: -1.5rem;
  top: -1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;

  align-items: center;
  flex-direction: column;
  background-color: rgba(1, 58, 224, 0.4);
  padding: 0.7rem;
  border-radius: ${borderRadius};
  z-index: 20;
  margin-top: 5rem;
`;
