import React from "react";
import Chat from "./Chat.jsx"
import "./Chat.css"

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Shimmy Karlson"
        message="Hi, do you want to be my friend?"
        timestamp="Just Now"
        profilePic= "./src/p9.jpg"
      />

      <Chat
        name="Joel Moss"
        message="Oh Hi"
        timestamp="Just Now"
        profilePic= "./src/p3.jpg"
      />

      <Chat
        name="Jimmy Jello"
        message="How's life?"
        timestamp="Just Now"
        profilePic= "./src/p2.jpg"
      />
      <Chat 
        name="Bill Weller"
        message="Hello"
        timestamp="Just Now"
        profilePic= "./src/p5.jpg" 
      />

      <Chat
        name="John Bouge"
        message="Hello🗿, How are you?"
        timestamp="20 Minutes Ago"
        profilePic= "./src/p6.jpg"
      />
        
       <Chat
         name="Beth Washington"
         message="What's up!?"
         timestamp="3 Hours Ago"
         profilePic= "./src/p7.jpg"
      />

      <Chat
        name="Kyle Heach"
        message="I'm very good at rock paper scissors 🤪🤪"
        timestamp="64 Days Ago"
        profilePic= "./src/p8.jpg"
      />

      <Chat
         name="Ryan Waterson"
         message= "I bet u 15 bucks im better"
         timestamp="1 Year Ago"
         profilePic= "./src/p2.jpg"
      />

      
        
    </div>
  );
}

export default Chats;