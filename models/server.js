import express from 'express'
import cors from 'cors'

// WebSockets
import { Server as ServerIo  } from 'socket.io'
import { createServer } from 'http'
import { socketController } from '../sockets/controller.js'


class Server{
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        // Crear el servidor de express y el de websockets
        this.serverIo = createServer(this.app)
        this.io = new ServerIo(this.serverIo)

        this.paths = {
          

        }
     

        // Mildewares
        this.middlewares()

        // Rutas de mi aplicacion
        this.routes()
        
        // Sockets - Configuracion de los sockets
        this.sockets()

    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Directorio publico
        this.app.use(express.static('public'))
    }

    // Metodo para las rutas
    routes() {
    }

    // Metodo para configurar los sockets
    sockets() {
        this.io.on('connection', socketController)
    }

    listen(){
        this.serverIo.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
          })
    }
}

export { Server } 