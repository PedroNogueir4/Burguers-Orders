import React from "react";


import imgBag from '../../assets/sacola.png'
import { Container, ContainerItens, Image, H1, Label, Input, Button } from './styles';

function Order() {


  return (
    <Container>
      <Image alt="logo" src={imgBag} />
      <ContainerItens>
        <div>
          <H1>Pedidos</H1>
        </div>
        <Label>Pedido</Label>
        <Input type='text' />
        <Label>Nome do Cliente</Label>
        <Input type='text'/>
        <Button>Novo Pedido</Button>
      </ContainerItens>

    </Container>

  );
}

export default Order;

