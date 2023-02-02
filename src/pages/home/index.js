import { React, useRef, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router-dom";


import imgBurguer from '../../assets/burguer.png'
import { Container, ContainerItens, Image, H1, Label, } from './styles';
import Buttons from "../../components/Button";
import Inputs from "../../components/Input"

function App() {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputOrder = useRef()
  const inputName = useRef()

  async function addNewOrder() {

    const data = await api.post("",
      {

        order: inputOrder.current.value,
        clientName: inputName.current.value,

      })
console.log(data)

    history.push('/pedidos')
  }

  return (
    <Container>
      <Image alt="logo" src={imgBurguer} />
      <ContainerItens>
        <div>
          <H1>Faça seu pedido!</H1>
        </div>
        <Label>Pedido</Label>
        <Inputs ref={inputOrder} type='text' />
        <Label>Nome do Cliente</Label>
        <Inputs ref={inputName} type='text' />
        <Buttons onClick={addNewOrder} >Novo Pedido</Buttons>
      </ContainerItens>

    </Container>

  );
}

export default App;
