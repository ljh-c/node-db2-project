
const express = require('express');

const server = express();

const carsRouter = require('./cars-router')

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>DB schema design</h1>')
});

server.use('/api/cars', carsRouter);

module.exports = server;