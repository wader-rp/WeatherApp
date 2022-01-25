import styled from "styled-components"

export const MainBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 0.1rem;
  width: 30%;
  height: 60%;
  border-radius: 10px;

  box-shadow: 10px 10px 15px rgb(0, 0, 0);
  background-color: rgba(68, 96, 239, 0.62);
  background-image: linear-gradient(320deg, rgba(176, 176, 176, 0.5) 0%, rgba(94, 103, 255, 0.5) 50%, rgba(60, 41, 185, 0.5) 100%);
`

export const CityName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  font-size: 1.5rem;
  font-weight: 600;
  width: 90%;
  height: 20%;
    
    `
export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: -4rem;
  width: 90%;
  height: 10%;
`
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;
  
  font-size: 5rem;
  font-weight: 900;
  width: 60%;
  height: 50%;
  
    
    `
export const MinAndMaxTmp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-size: 1.5rem;
  font-weight: 600;
  width: 80%;
  height: 10%;
    
    `