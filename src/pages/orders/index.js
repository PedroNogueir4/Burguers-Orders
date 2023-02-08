import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import imgBag from '../../assets/sacola.png'
import dump from '../../assets/dump.svg'
import { Container, ContainerItens, Image, H1,Listorder,Trash } from './styles';
import Buttons from "../../components/Button";
import api from "../../services";


function Order() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchOrders() {

      const { data: newOrder } = await api.get("http://localhost:3001/order")
      setUsers(newOrder)
    }
    fetchOrders()
  }, [])

 async function deleteOrder(orderId) {

  await api.delete(`http://localhost:3001/order/${orderId}`)

 const newOrders =users.filter((user)=>user.id != orderId)

setUsers(newOrders)
}


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

        <ul>
          {users.map((order) => (

            <Listorder key={order.id}> <p>{order.order}</p> <br></br><h4>{order.clientName}</h4> <Trash onClick={() => deleteOrder(order.id)}><img alt='lixeira' src={dump}></img></Trash></Listorder>

          ))}


        </ul>


        <Buttons onClick={goBack} isColor={true}>Voltar</Buttons>
      </ContainerItens>

    </Container>

  );
}

export default Order;

