const express = require('express');
const helmet = require('helmet');

const carRouter = require('../api/cars/cars-Router');

const server = express();

server.use(helmet());

server.use(express.json());

// CARS Route
server.use('/api/cars', carRouter);

module.exports = server;