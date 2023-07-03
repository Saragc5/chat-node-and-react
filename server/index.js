const http = require("http");
const cors = require('cors');
const server = http.createServer();

const io = require("socket.io")(server, {
  cors: {origin:  "http://localhost:5173" } //esta segunda parametro es un objeto de configuración 
});

//ahora capturamos eventos:ya definidos en la doc d socket io
io.on("connection", (socket) => {
  console.log("Se ha conectado un cliente")

    socket.broadcast.emit('chat_message', {
      usuario: 'INFO',
      mensaje: 'Se ha conectado un nuevo usuario'
  });

  socket.on("chat_send_message", (data) => {
    console.log(data);
    //hacemos un reenvio a todos los usuarios conectados y vamos al front para volver a uscribirnos a los eventos del chat
    io.emit("chat_send_message", data)
  })
})

server.listen(5000, function (){
  console.log("Listenning on port:5000");
});