require('dotenv').config()
const express = require('express');
const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 9000

server.use(express.json());
server.use(cors())

server.get('/api/products', (req, res) => {
  res.json({message: 'this is where my products would be displayed'})
})

server.use('/', (req, res) => {
  res.send('Hello from my first server made from scratch')
})

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})