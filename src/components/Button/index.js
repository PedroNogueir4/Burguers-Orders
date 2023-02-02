import React from "react";
import { Button } from "./styles";

const Buttons = ({children,isColor}) =>{

return(

<Button isColor={isColor}>{children}</Button>

)
};

export default Buttons;