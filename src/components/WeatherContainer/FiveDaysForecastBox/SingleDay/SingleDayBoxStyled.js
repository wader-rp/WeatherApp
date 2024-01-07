import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../../App.styled";

export const SingleDayBoxStyled = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 2rem;
  min-width: min-content;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  background-color: rgba(1, 58, 224, 0.3);
  z-index: 1;
  cursor: pointer;

  @media (hover: hover) {
    &:after {
      content: "Details";
      font-weight: 600;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: ${borderRadius};
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
      background-color: rgba(218, 150, 0, 0.96);
      color: black;
      font-weight: bolder;
    }
  }
  @media (hover: none) {
    &:after &:hover:after,
    &:focus:after {
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    box-shadow: none;
  }
`;

export const DayTemperature = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media (max-width: 1440px) {
    font-size: 1rem;
  }
`;
export const MiniIconAndTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MiniDate = styled.h5`
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  text-wrap: nowrap;
  letter-spacing: 2px;

  @media (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;
