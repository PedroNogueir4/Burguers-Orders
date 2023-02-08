 import styled from "styled-components";


 export const Container =styled.div`
 width: 100vw;
 min-height: 100vh;
 background: #0A0A10;

 display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 800px){
    
    justify-content: center;
    gap: 42px;
}
@media (min-height: 800px){
    
    justify-content: center;
    gap: 20px;
}

 `
export const ContainerItens =styled.div`
display: flex;
flex-direction: column;
color: white;
width: 30%;

div{
    display: flex;
align-items: center;
flex-direction: column;
padding-top: 15px;
}
@media (max-width: 800px){
    
width: 65%;

}
@media (min-height: 1000px){
    
    width: 40%;
  
  }

`

export const Image = styled.img`
width: 342px;
height: 265px;

@media (min-height: 900px){
    
    width: 400px;
height: 317px;

}
`

export const H1 = styled.h1`
font-size: 21px;
color: #FFFFFF;
font-weight: 700;

`
export const Label =styled.label`
margin-top: 7%;
margin-left: 7px;
font-weight: 700;
@media (max-width: 800px){
    
    margin-top: 32px;
    
}
@media (min-height: 800px){
    
  margin-top: 55px;

}

`

export const Inputs = styled.input`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;

height: 37px;
width: 100%;
padding-left: 5px;
color: white;


`

