import styled from "styled-components";

export const SingleDayBoxStyled = styled.div`
  flex: 1;
  position: relative;
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
  z-index: 1;
  cursor: pointer;

  &:after {
    content: "Details";
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px rgba(0, 0, 0, 0.42) solid;
    cursor: pointer;
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    letter-spacing: 7px;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0;
    color: white;
    transition: opacity 600ms ease;
  }

  &:hover:after,
  &:focus:after {
    opacity: 0.95;
    background-color: #000000;
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
  position: relative;
`;
export const MiniDate = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
