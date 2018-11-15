import React from 'react';
import style from './StatusButtons.css';
const thumbsUp = require('./../../resource/images/thumbs-up-black.png');
const thumbsdown = require('./../../resource/images/thumbs-down-black.png');
const thumbsUpBlue = require('./../../resource/images/thumbs-up-blue.png');
const thumbsdownRed = require('./../../resource/images/thumbs-down-red.png');


function StatusButtons (props) {
  return (
    
    <img className = "img" src = {`${ props.imgtype === "up" ?  props.type === "display" && props.bgColor !== '' && props.bgColor ? thumbsUpBlue : thumbsUp :
          props.type === "display" && props.bgColor !== '' && !props.bgColor ? thumbsdownRed : thumbsdown }`}/>

  );
}
  export default StatusButtons;