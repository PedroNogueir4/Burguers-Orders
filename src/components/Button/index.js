import React from "react";
import { Button } from "./styles";

const Buttons = ({children,isColor,onClick}) =>{

return(

<Button  onClick={onClick} isColor={isColor}>{children}</Button>
 
)

};

export default Buttons;