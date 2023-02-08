import styled from "styled-components";


 export const Container =styled.div`
 width: 100vw;
min-height: 100vh;
 background: #0A0A10;

 display: flex;
flex-direction: column;
align-items: center;
@media (min-height: 1000px){
    
   justify-content: center;
   gap: 35px;

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
width: 12rem;
height: 265px;

@media (min-height: 1000px){
    
    width: 380px;
height: 307px;

}
`

export const H1 = styled.h1`
font-size: 21px;
color: #FFFFFF;
font-weight: 700;

`

export const Listorder =styled.li`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;
list-style-type: none;


display: grid;
grid-template-columns: 1fr auto;
align-items: center;

height: 77px;
width: 100%;
padding: 0px 5px;
color: #ffffff;
margin-top: 7%;
font-weight: 300;
font-size: 83%;
h4{
    font-weight: 700;
    font-size: 120%;
    
}

@media (min-height: 600px){
    
    
height: 30%;

}
`
export const Trash = styled.button`
background: none;
border: none;
cursor: pointer;
margin-bottom: 52%;
:hover{opacity: 0.8;}
:active{opacity: 0.5;}

`
