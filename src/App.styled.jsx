import styled from "styled-components";

export const AppStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url(https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80);
  background-size: cover;

  height: 100%;
  width: 100%;
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

export const Error404 = styled.h3`
  display: flex;
  margin-top: -1.4rem;
  justify-content: center;
  color: #030303;
  text-shadow: 0.1px 0.1px #ec0000;
`;
