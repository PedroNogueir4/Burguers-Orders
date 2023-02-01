 import styled from "styled-components";


 export const Container =styled.div`
 width: 100vw;
 height: 100vh;
 background: #0A0A10;

 display: flex;
flex-direction: column;
align-items: center;
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

`

export const Image = styled.img`
width: 342px;
height: 265px;
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
`
export const Input = styled.input`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;

height: 37px;
width: 100%;
padding-left: 5px;
color: white;

`
export const Button = styled.button`
width: 100%;
height: 45px;
margin-top: 40px;
cursor: pointer;
font-weight: 900;


background: #D93856;
border: none;
border-radius: 15px;
color: white;

:hover{
    opacity: 0.8;
}
:active{
    opacity: 0.6;
}
`