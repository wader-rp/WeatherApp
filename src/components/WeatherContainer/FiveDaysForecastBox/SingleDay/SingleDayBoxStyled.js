import styled from "styled-components";

export const SingleDayBoxStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min-content;
  height: 100%;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgb(17, 28, 17);
  border: 2px #414141 solid;
  background-color: rgba(3, 3, 3, 0.6);
`;

export const DayTemperature = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export const MiniIconAndTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
  padding: 0 10px;
`;
