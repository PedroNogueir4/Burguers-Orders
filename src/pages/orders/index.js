import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import imgBag from '../../assets/sacola.png'
import { Container, ContainerItens, Image, H1, } from './styles';
import Buttons from "../../components/Button";
import Inputs from "../../components/Input";

function Order() {
  const [users, setUsers] = useState()
  const history = useHistory()



 
  function goBack() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt="logo" src={imgBag} />
      <ContainerItens>
        <div>
          <H1>Pedidos</H1>
        </div>
        <Inputs margin={true} type='text' />
        <Inputs margin={true} type='text' />
        <Buttons onClick={goBack} isColor={true}>Voltar</Buttons>
      </ContainerItens>

    </Container>

  );
}

export default Order;

