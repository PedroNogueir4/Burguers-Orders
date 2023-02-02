import styled from "styled-components";


export const Input = styled.input`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;

height: 37px;
width: 100%;
padding-left: 5px;
color: white;

${props => props.margin && `
    margin-top: 7%;
height:70px;
`}

`