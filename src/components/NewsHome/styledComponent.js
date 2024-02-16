import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const AppContainer=styled.div`
display:flex;
flex-direction:column;
background-color:white;`

export const Header = styled.h1`
  text-align: center;
  margin-top: 20px;
  color:black;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Container = styled.ul`
  min-width:100vw;
  min-height:100vh;
  display:flex;
  flex-direction:row;
  justufy-content:center;
  align-items:center;
  margin-right: auto;
  margin-left: auto;
  flex-wrap:wrap;
  
`;

export const card = {
  marginTop: "10px",
  marginBottom: "50px",
};

export const CardContainer=styled.div`

 width:90%;
 padding:20px;
 background-color:  #f9f9f9;
 border-radius:5px;
 height:500px;
 margin:5px;
 @media screen and (min-width:768px){
  width:30%;
  height:500px;
  display:flex;
  background-color:  #f9f9f9;
  
 }
`



export const SpinnerContainer = styled.div`
  position: fixed;
  top: 140px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
  
export const LoadingCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #005abb;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 0.819672131147541s linear infinite;
`;