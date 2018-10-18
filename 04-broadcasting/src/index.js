let init = () => {
  let socket = io();
  let form = document.querySelector('form');
  let message = document.getElementById('m');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chat message', message.value);
    message.value = '';
    return false;
  });
};

init();