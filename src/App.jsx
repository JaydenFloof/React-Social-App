import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Chats from "./Chats.jsx";
import TinderCards from './TinderCards.jsx'; 
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SwipeButtons from "./SwipeButtons.jsx";
import ChatScreen from "./ChatScreen.jsx";
import GroupScreen from "./GroupScreen.jsx";
import Groups from "./Groups.jsx";
import signup from "./signup.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path = "/chat/:person"> 
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          
          <Route path = "/chat"> 
            <Header backButton="/" />
            <Chats/>
          </Route>

          <Route path ="/group/:support">
            <Header backButton ="/" />
            <GroupScreen/>
          </Route>

          <Route path = "/group"> 
            <Header backButton="/" />
            <Groups/>
          </Route>
          
          <Route path = "/"> 
            <Header/>
            <TinderCards />
            <SwipeButtons />
          </Route>
          
          <Route path= "/hor">
            <signup />
          </Route>
        </Switch>
          
      </BrowserRouter>
    </div>
    
  );
}

export default App;