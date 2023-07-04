import { io } from 'socket.io-client'
import './App.css'
import { useEffect, useState } from 'react'
import { Title, LiMessage, UlMessage, InputMessage , ButtonSend} from './msg-components';

//este es el puerto del servidor
const socket = io("http://localhost:5000")

function App() {

  //comprobar si estamos conectados:
  const [isConnected, setIsConnected] = useState(false);
 //el msanje que escribimos en el campo de texto
  const [newMessage, setNewMessage] = useState("")
//donde almaceno todos los mensajes, lo que yo escribo y los que recibo
  const [messages, setMessages] = useState([])

  //nos suscribimos a diversos eventos con la parte de back
  useEffect(()=> {
    //evento nativo de socjet
    socket.on("connect", () => setIsConnected(true))
    //aquí es el punto donde me suscribo al evento para que nos llegue el mensajes a todos
    //los conectados:
    socket.on("chat_send_message", (data) => {
      console.log(data);
      setMessages(messages => [...messages, data])

    })

    //con el return nos desuscribimos de los eventos:(no me queda claro por qué)es para evitar errores
    return () => {
      socket.off("connect");
      socket.off("chat_send_message")
    }
  }, [])

  //primer parámetro el nombr del evento a lanzar
  //segundo parámetro con los datos que yo envúo
  const sendMessage = () => {
    socket.emit("chat_send_message", {
      user: socket.id,
      message: newMessage
    })
  }

  return (
    <div className="App">
      <Title>{isConnected ? "CONNECTED" : "NO CONNECTED"}</Title>
      <UlMessage>
      {messages.map((message) =>(
        <LiMessage>{message.user}: {message.message}</LiMessage>

      ))}
      </UlMessage>
      <InputMessage 
        type='text'
        onChange={e => setNewMessage(e.target.value)}
      />
       <ButtonSend
       onClick={sendMessage}>Send</ButtonSend>
    </div>
  )
}

export default App
