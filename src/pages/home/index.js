import { React, useRef, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router-dom";


import imgBurguer from '../../assets/burguer.png'
import { Container, ContainerItens, Image, H1, Label,Inputs } from './styles';
import Buttons from "../../components/Button";

function App() {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputOrder = useRef()
  const inputName = useRef()

  async function addNewOrder() {

    const { data :newOrder }= await api.post("http://localhost:3001/order",
      {

        order: inputOrder.current.value,
        clientName: inputName.current.value,

      });

  setUsers([...users , newOrder])
  console.log(users)
  
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
