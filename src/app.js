const express = require('express');
const cors = require('cors');
// const Koa = require('koa')
// const http = require('http')
// const socket = require('socket.io')

// const server = new Koa()
// const server2 = http.createServer(server.callback())
// const io = socket(server2)

// const SERVER_HOST = 'localhost'
// const SERVER_PORT = 7500

// io.on('connection', socket => {
//     console.log('[IO] Connection => Server has a new connection')
//     socket.on('message', data => {
//         socket.broadcast.emit("message", data);
//         console.log('[SOCKET] message => ', data);
//     })

//     socket.on('disconnect', () => {
//         console.log('[SOCKET] Disconnect => A connection was disconnected')
//     })
// })

// server2.listen(SERVER_PORT, SERVER_HOST, () => {
//     console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}}`)
//     console.log('[HTTP] Listen => Press CRTL+C to stop it')
// })

const app = express();
// ==> Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);
app.use('/', productRoute);
module.exports = app;