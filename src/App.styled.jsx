import styled from "styled-components";

export const boxShadow = "4px 4px 10px rgb(1, 55, 119)";
export const textColor = "rgb(255, 200, 0)";
export const borderRadius = "5px";

export const AppStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url(https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80);
  background-size: cover;
  z-index: -2;
  height: 100%;
  width: 100%;
`;

export const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const DotsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

export const Error404 = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  margin-top: 5rem;
`;
