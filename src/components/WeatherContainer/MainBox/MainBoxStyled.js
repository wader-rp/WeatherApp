import styled from "styled-components";
const mainBoxBackgroundColor = "rgba(1, 58, 224, 0.3)";

export const MainBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  color: #ffffff;
  flex: 1;
  min-height: 27rem;
  height: 80%;
  border-radius: 10px;
  box-shadow: 7px 7px 10px rgb(1, 55, 119);

  background-color: ${mainBoxBackgroundColor};

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    box-shadow: none;
  }

  @media (max-width: 500px) {
    padding: 0;
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
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: -2rem;
`;

export const Temperature = styled.div`
  display: flex;
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
