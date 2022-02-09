import styled from "styled-components";

export const MainBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 10px 0 0 0;
  color: #ffffff;
  text-shadow: 0 0 10px #565656;
  width: 40%;
  height: 60%;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(0, 0, 0, 0.51);
`;

export const CityName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;
  width: 90%;
  height: 20%;
`;
export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  width: 90%;
  height: 10%;
`;
export const Temperature = styled.div`
  display: flex;
  align-items: center;
  font-family: Outfit, sans-serif;
  font-size: 5rem;
  font-weight: 800;
  width: 60%;
  height: 50%;
`;
export const MinAndMaxTmp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 600;
  width: 80%;
  height: 10%;
`;

export const IconAndTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
`;
