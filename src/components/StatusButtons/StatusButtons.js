import React from 'react';
import style from './StatusButtons.css';

function StatusButtons (props) {

  const image = props.imgtype === "up" ? props.type === "display" &&  props.bgColor !== '' && props.bgColor ?
  <i className={`${props.type === "display" ? "fa-3x green" : 'fa-2x'} fa-3x fa fa-thumbs-up `}></i> : <i className={`${props.type === "display" ? "fa-3x" : ' fa-2x mx-4 pt-4'} fa fa-thumbs-up `}></i> :
  props.type === "display" && props.bgColor !== '' && !props.bgColor ?
  <i className={`${props.type === "display" ? "fa-3x red" :'fa-2x'}  fa fa-thumbs-down img`}></i> : <i className={`${props.type === "display" ? "fa-3x" : 'fa-2x mr-3 pt-4'} fa fa-thumbs-down img`}></i>


  return (
      <div>
      {image}
      </div>
    

  );
}
  export default StatusButtons;