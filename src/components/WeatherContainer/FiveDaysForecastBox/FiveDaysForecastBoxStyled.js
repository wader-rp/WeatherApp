import styled from "styled-components";
import { borderRadius } from "../../../App.styled";

export const FiveDaysForecastBoxStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 25%;
  border-radius: ${borderRadius};
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0 0 1rem 0;
  }
`;
