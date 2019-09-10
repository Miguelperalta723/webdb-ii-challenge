const express = require('express');
const carsRouter = require('./carsRouter.js');
const server = express();

server.use(express.json())
server.use('/cars' , carsRouter)


server.get('/', (req, res) => {
    res.send('api is up')
});

module.exports = server;