import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import "./SwipeButtons.css";

function SwipeButtons(){
  return (
    <div className="swipeButtons">
      

      
    <IconButton className="swipeButtons__left">
      <CloseIcon fontSize="large"/>
    </IconButton>
      
    <IconButton className="swipeButtons__star">
      <StarRateIcon fontSize="large" />
    </IconButton>
      
    <IconButton className="swipeButtons__right"> 
      <SendIcon fontSize="large" />
    </IconButton>
      

      
    </div>
  );
};

export default SwipeButtons;

