import React from 'react';
import style from './StatusButtons.css';

function StatusButtons (props) {
  return (
    <div  className = {`${ props.type === "display" && props.bgColor !== '' ?
          props.bgColor  ? props.imgtype === "up" ? "selectedGreen": '' :
          props.imgtype === "down" ? "selectedred":'' :''}`}>

    <img className = "img" src = {props.img}/>
    </div>
  );
}
  export default StatusButtons;