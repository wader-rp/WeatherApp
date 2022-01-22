import styled from "styled-components";


export const AppStyled = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  background: url('https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  width: 100%;
  height: 100%;
  

  &::before {

    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: rgb(34, 108, 195);
    background: linear-gradient(0deg, rgba(34, 108, 195, 1) 0%,
    rgba(78, 178, 196, 1) 24%,
    rgba(202, 105, 105, 1) 57%,
    rgba(253, 208, 45, 1) 100%);
    opacity: 0.35;
  }
`

export const MainPage = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;



`


