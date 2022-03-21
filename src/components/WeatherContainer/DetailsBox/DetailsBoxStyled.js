import styled from "styled-components";

export const DetailsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 27rem;
  min-width: 54rem;
  width: 80%;
  height: 80%;
  padding: 2rem;
  gap: 12rem 3rem;
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

export const DataAndWindWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/////////////////////Daytime//////////////////////
export const DayTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  width: 100%;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: -0.4rem;
  width: 100%;
  height: 0.3rem;
  border-radius: 30px;
  background: rgb(59, 59, 59);
  border: 1px solid #3f3f3f;
`;

export const SunPlacement = styled.div`
  margin-left: ${(props) => props.pos};
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  background: #da633d;
`;

export const Sunset = styled.div`
  font-size: 1.2rem;
  color: white;
`;

export const Sunrise = styled.div`
  font-size: 1.2rem;
  color: white;
`;

export const SunriseAndSunsetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
