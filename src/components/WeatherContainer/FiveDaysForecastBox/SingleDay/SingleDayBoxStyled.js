import styled from "styled-components";

export const SingleDayBoxStyled = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: min-content;

  border-radius: 10px;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(3, 3, 3, 0.6);

  &:hover {
    background-color: rgb(3, 3, 3);
    cursor: pointer;
  }
`;

export const DayTemperature = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
`;
export const MiniIconAndTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 20px;
`;
export const MiniDate = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
