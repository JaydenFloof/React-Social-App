import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import Chats from "./Chats.jsx"

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name:'Bill',
      image: "./src/p5.jpg",
      message: "Hello",
    },
    {
      name: "Bill",
      image: "./src/p5.jpg",
      message: "I saw you have social anxiety as well. You wanna talk?",
    },

  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MET ON 04/09/2022</p>
      {messages.map((message) => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
          
        ) : (
          
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>     
        )
      ))}
      
        <div className="chatScreen__input">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text" 
            />
          
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
        </div>
    </div>
  );
}



export default ChatScreen;