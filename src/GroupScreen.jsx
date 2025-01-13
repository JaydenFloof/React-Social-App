import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import Groups from "./Groups.jsx"

function GroupScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name:'Jim',
      image: ".",
      message: "Hey everyone, just a daily check here. How is everyone doing?",
    },
    {
      name: "Alex",
      image: ".",
      message: "It's been going pretty good. You guys have really helped me out over these past few months.",
    },
    {
      name: "Bobby",
      image: ".",
      message: "That's great to hear Alex!",
    },
    {
      name: "Fred",
      image: ".",
      message: "To be honest, it's been a real struggle at school this week but I'll keep trying to improve.",
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
        Welcome To The Chat Room!</p>
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



export default GroupScreen;