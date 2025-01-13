import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase.js"
import "./TinderCards.css";
// import { collection } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";


function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Johnny Sudbury",
      url: "./src/p1.jpg",
      disease: "Anxiety",
      request: "Looking for people with similar condition to hang out with",
      interest: "Drawing, painting, reading"
    },
    {
      name: "Jimmy Jello",
      url: "./src/p2.jpg",
      disease: "Major Depressive Disorder",
      request: "Looking for someone to talk to. Feeling isolated from my familiy.",
      interest: "Basketball, Volleyball, Watching Anime"
    },
    {
      name: "Beatrice Carolina",
      url: "./src/p4.jpg",
      disease: "Social Anxiety",
      request: "Struggling to talk to people in real life, would like to meet people online and play some video games together!",
      interest: "Apex Legends, Warzone, Fortnite, Rock Climbing"
    },
    {
      name: "Joel Moss",
      url: "./src/p3.jpg",
      disease: "Bulimia",
      request: "Wanting to talk to people with Bulimia and meet people to talk about my eating disorder",
      interest: "Photography"
    },
    {
      name: "Shimmy Karlson",
      url: "./src/p9.jpg",
      disease: "severe social anxiety",
      request: "my parents pushed me to become a part of this community. I hope to meet people like me and learn how they cope",
      interest: "playing fortnite, horseback riding, eating"
    },
  ]);
  
  return (
    <div>
      <div className="tinderCards__cardContainer">
     {people.map(person => (
       <TinderCard
         className="swipe"
         key={person.name}
         preventSwipe={['up', 'down']}
       >
         <div
           style={{ backgroundImage: `url(${person.url})` }}
           className="card"
         >
           <h3>{person.name}</h3>
           <h4>Medical condition: {person.disease}</h4>
           <h5 class="extraInfo">Looking for: {person.request}</h5>
           <h6 class="extraInfo">Interests: {person.interest}</h6>
         </div>
       </TinderCard>
     ))}
       </div>
    </div>
  );
}

export default TinderCards;