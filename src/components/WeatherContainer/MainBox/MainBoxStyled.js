import styled from "styled-components";

export const MainBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;
  color: #ffffff;
  width: 30rem;
  min-height: 27rem;
  height: 80%;
  border-radius: 10px;
  box-shadow: 7px 7px 10px rgb(1, 55, 119);
  border: 7px rgba(218, 150, 0, 0.87) solid;
  background-color: rgba(1, 58, 224, 0.3);
`;

export const CityName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: -1rem;
`;
export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: -2rem;
`;
export const Temperature = styled.div`
  display: flex;
  align-items: center;
  font-family: Outfit, sans-serif;
  font-size: 5rem;
  font-weight: 800;
`;
export const MinAndMaxTmp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  width: 80%;
`;

export const IconAndTempWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -1rem 0 0 -2rem;
`;
