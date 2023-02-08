const { response, request } = require('express')
const express = require('express')
const app = express()
const uuid = require('uuid')
const cors=require('cors')
app.use(express.json())
app.use(cors())

const port = 3001

const listOrders = []

const checkIdOrder = (request, response, next) => {
    const { id } = request.params
    const index = listOrders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Order not found" })
    }
    request.orderId = id
    request.orderIndex = index
    next()
}


app.get('/order', (request, response) => {
    return response.json(listOrders)
})

app.post('/order', (request, response) => {
    const { order, clientName, price } = request.body
    const orders = { id: uuid.v4(), order, clientName, price, Status: "Em preparação" }
    listOrders.push(orders)
    return  response.status(201).json(orders)
})

app.put('/order/:id', checkIdOrder, (request, response) => {
    const { order, clientName, price, } = request.body
    const id = request.orderId
    const index = request.orderIndex

    const updateOrder = { id, order, clientName, price,Status:"Em preparação"}
    listOrders[index] = updateOrder

    return response.json(updateOrder)

})
app.delete('/order/:id', checkIdOrder, (request, response) => {

    const index = request.orderIndex
    listOrders.splice(index, 1)

    return response.status(204).json("Deleted")
})

app.patch('/order/:id', checkIdOrder, (request, response) => {
    const index = request.orderIndex
    listOrders[index].Status="Ready"

return response.json(listOrders[index])
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})