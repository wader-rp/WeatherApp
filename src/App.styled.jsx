import styled from "styled-components";

export const AppStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80");
  background-size: cover;
  height: 100%;
  width: 100%;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgb(31, 31, 31) 24%,
      rgba(7, 7, 7, 0.38) 57%,
      rgba(12, 12, 12, 0.6) 100%
    ); //ten kolor do wyjebania
    opacity: 0.9;
  }
`;

export const MainPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const DotsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;
