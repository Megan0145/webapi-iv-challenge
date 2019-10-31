const express = require('express');
const cors = require('cors');
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');
const server = express();

server.use(express.static(__dirname + '/client/build'))
server.use(express.json());
server.use(logger);
server.use(cors());
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
});

//custom middleware

function logger(req, res, next) {
  console.log(`\n***NEW REQUEST*** \nRequest Method: ${req.method} \nRequest URL: ${req.url} \nRequest Timestamp: ${Date.now()}\n`);
  next();
}

module.exports = server;
