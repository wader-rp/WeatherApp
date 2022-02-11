import styled from "styled-components";

export const MainBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;

  color: #ffffff;
  text-shadow: 0 0 10px #565656;
  min-width: 25rem;
  min-height: 25rem;

  border-radius: 10px;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(0, 0, 0, 0.51);
  &:hover {
    background-color: rgb(3, 3, 3);
    cursor: pointer;
  }
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
  margin-left: -1rem;
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
