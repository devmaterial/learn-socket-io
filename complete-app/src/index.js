let init = () => {
  let socket = io();
  let form = document.querySelector('form');
  let nickname = document.getElementById('n');
  let message = document.getElementById('m');
  let messages = document.getElementById('messages');

  console.log(messages);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chat message', `${nickname.value}: ${message.value}`);
    message.value = '';
    return false;
  });
  
  socket.on('chat message', (msg) => {
    let li = document.createElement('li');
    li.innerHTML = msg;
    messages.appendChild(li);
  });
};

init();