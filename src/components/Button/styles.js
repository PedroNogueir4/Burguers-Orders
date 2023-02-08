import styled from "styled-components";


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
${props => props.isColor && ` background: rgba(255, 255, 255, 0.14)`}

@media (max-width: 700px){
    
    margin-top: 60px;
    
}
@media (min-height: 800px){
    
    margin-top: 110px;
  
  }

`
