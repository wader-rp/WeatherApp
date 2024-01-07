import styled from "styled-components";

export const WeatherContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const WeatherContainerWrapper = styled.div``;
