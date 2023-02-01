import React from "react";
//import axios from "axios";
//import api from "../../services";


import imgBurguer from '../../assets/burguer.png'
import { Container, ContainerItens, Image, H1, Label, Input, Button } from './styles';

function App() {



 async function addNewOrder(){


 

}

  return (
    <Container>
      <Image alt="logo" src={imgBurguer} />
      <ContainerItens>
        <div>
          <H1>Faça seu pedido!</H1>
        </div>
        <Label>Pedido</Label>
        <Input  type='text' />
        <Label>Nome do Cliente</Label>
        <Input  type='text'/>
        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>

    </Container>

  );
}

export default App;
