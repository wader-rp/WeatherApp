import styled from "styled-components";

export const DetailsBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 27rem;
  min-width: 54rem;
  width: 80%;
  height: 80%;
  padding: 2rem;
  gap: 4rem;
  border-radius: 10px;
  margin-left: 1rem;
  box-shadow: 7px 7px 10px rgb(1, 55, 119);
  border: 7px rgba(218, 150, 0, 0.87) solid;
  background-color: rgba(1, 58, 224, 0.3);
`;

export const DetailsData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 2rem;
  box-shadow: 3px 0 70px rgba(1, 58, 224, 0.3);
  border-radius: 10px;
  width: 30rem;
  height: 100%;
`;

export const DataDisplay = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.2rem;
  color: white;
  gap: 0.3rem;
  width: 25%;
`;
export const DataInfo = styled.div`
  color: rgb(255, 174, 0);
  letter-spacing: 3.5px;
  font-weight: 600;
  font-size: 1.3rem;

  text-shadow: 1.5px 1.5px 2.5px #000000;
`;

export const Wind = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 1rem;
  gap: 1.3rem;
  width: 50%;
  color: rgb(255, 174, 0);
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 1.6rem;
`;
export const WindSpeed = styled.div`
  font-size: 1.8rem;
  color: white;
`;
export const DataAndWindWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem 0;
`;
export const DetailsDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.5rem 6.5rem;
  width: 80%;
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
  background: rgb(255, 179, 132);
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.26);
`;

export const SunPlacement = styled.div`
  margin-left: ${(props) => props.pos};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 99, 0, 1) 45%,
    rgb(255, 249, 0) 100%
  );
`;

export const SunriseSunset = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: rgb(255, 174, 0);
  letter-spacing: 3.5px;
  font-weight: 600;
  font-size: 1.5rem;
  text-shadow: 1.5px 1.5px 2.5px #000000;
`;

export const SunriseSunsetHour = styled.div`
  font-size: 1.7rem;
  color: white;
`;

export const SunriseAndSunsetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
