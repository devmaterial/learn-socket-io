const express = require('express');
const app = express();
const server = app.listen(3000, () => console.log('listening on port 3000'));
const io = require('socket.io')(server);

app.use(express.static('src'));

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('chat message', 'a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('chat message', 'user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});