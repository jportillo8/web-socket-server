

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id)
        
    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    })

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456
        callback(id)
        // socket para enviar a un cliente en especifico
        // socket.emit('enviar-mensaje', payload)
        // socket para enviar a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

export { socketController  }