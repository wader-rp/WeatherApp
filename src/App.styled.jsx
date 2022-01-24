import styled from "styled-components";


export const AppStyled = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  background: url('https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  height: 100%;
  width: 100%;


  &::before {

    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: rgb(34, 108, 195);
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%,
    rgb(152, 95, 175) 24%,
    rgb(66, 91, 55) 57%,
    rgb(12, 12, 9) 100%);
    opacity: 0.4;
  }
`

export const MainPage = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;



`


