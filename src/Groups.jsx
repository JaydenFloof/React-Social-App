import React from "react";
import Group from "./Group.jsx"
import "./Chat.css"

function Groups() {
  return (
    <div className="chats">
      <Group
        name="Eating Disorders"
        message="Support community for those with eating disorders."
        timestamp="Just Now"
        profilePic= "./src/group.png" 
      />

      <Group
        name="Social Anxiety"
        message="Come and meet new friends!"
        timestamp="20 Minutes Ago"
        profilePic= "./src/group.png"
      />
        
       <Group
         name="Grief Consolation"
         message="Dealing with grief? Talk with others for emotional support."
         timestamp="3 Hours Ago"
         profilePic= "./src/group.png"
      />

      <Group
        name="Addiction"
        message="Support group for those struggling with their addictions."
        timestamp="2 Days Ago"
        profilePic= "./src/group.png"
      />

      <Group
         name="ADHD"
         message= "Have ADHD and want to talk? Heres the place!"
         timestamp="3 days ago"
         profilePic= "./src/group.png"
      />
        
    </div>
  );
}

export default Groups;