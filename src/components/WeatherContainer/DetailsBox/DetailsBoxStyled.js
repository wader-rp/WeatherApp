import styled from "styled-components";

export const DetailsBoxStyled = styled.div`
  display: flex;
  min-height: 25rem;
  min-width: 53rem;
  height: 60%;
  padding: 2rem;
  gap: 10px 30px;
  border-radius: 10px;
  margin-left: 2%;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(0, 0, 0, 0.51);
`;

export const DetailsDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  justify-content: space-between;
`;

export const Sunset = styled.div`
  display: flex;
  font-size: 2rem;
  color: white;
`;

export const Sunrise = styled.div`
  display: flex;
  font-size: 2rem;
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
  border-right: 2px white solid;
`;
export const WindSpeed = styled.div`
  font-size: 1.5rem;
  color: white;
`;
