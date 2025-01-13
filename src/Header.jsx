import React from 'react';
import "./header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link, useHistory} from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return(
    <div className = "header">
      
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          < ArrowBackIosNewIcon fontSize="large" className="header__icon" />
        </IconButton>
      
      ): (

      <Link to="/group">
        <IconButton>
          <GroupsIcon fontSize="large" className="header__Icon" />
        </IconButton>
      </Link>

      )}

      <img className="header__logo"
        src="./src/logo.png" 
        alt="YNA Logo"/>
      

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="headerIcon" fontSize="large" />
        </IconButton>
      </Link>
      
    </div>
  )
    
  
}

export default Header