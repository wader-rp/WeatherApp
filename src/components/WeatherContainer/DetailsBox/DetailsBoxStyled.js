import styled from "styled-components";

export const DetailsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  min-width: 53rem;
  height: 60%;
  padding: 2rem;
  gap: 10rem 3rem;
  border-radius: 10px;
  margin-left: 1rem;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(0, 0, 0, 0.51);
`;

export const DetailsData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

export const Sunset = styled.div`
  display: flex;
  font-size: 1rem;
  color: white;
`;

export const ProgressBar = styled.div`
  min-width: 65%;
  height: 0.7rem;
  border: 1px solid white;
  border-radius: 10px;
`;

export const SunPlacement = styled.div`
  width: ${(props) => props.pos};
  height: 10px;
  border-radius: inherit;
  background: linear-gradient(to right, yellow, grey);
`;

export const Sunrise = styled.div`
  display: flex;
  font-size: 1rem;
  color: white;
`;

export const FeelsLike = styled.div`
  display: flex;
  font-size: 2rem;
  color: white;
`;
export const Pressure = styled.div`
  display: flex;
  font-size: 2rem;
  color: white;
`;

export const Wind = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;
export const WindSpeed = styled.div`
  font-size: 1.5rem;
  color: white;
`;
export const DayTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataAndWindWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
