import React from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import "./Chat.css"


function Chat({name, message, profilePic, timestamp}){
  return (
    <Link to={`/chat/${name}`}>
    <div className="chat">
    <Avatar className="chat__image" alt={name} src={profilePic} />
    <div className="chatDetails">
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
    
    <h4>{timestamp}</h4>
    
    </div>
    </Link>
  );
}

export default Chat;