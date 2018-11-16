import React from 'react';
import style from './DocInfoCard.css';
import StatusButton from '../StatusButtons/StatusButtons'
const downloadbotton = require('./../../resource/images/Download-btn.png');

function DocInfoCard (props) {
  const downloadbtn = props.link ? (<i class="fa fa-3x fa-download float-right mr-5 pl-5 pt-3" onClick={( event ) => props.openLink( event,  props.link)}></i>) : ''
  const listitems = props.type !== 'list' ? ((<div>{downloadbtn}</div>)) : ''
  return (
    <div  className = {`${props.cssClassName}`}>
    <span  onClick={( event ) => props.docSelected( event,  props)} className = "nameField">{props.name}</span>
    {listitems}
    
    <div className ={`${props.type === "list" ? " imgTumbsUplist float-right" : "imgThumbsUp float-right pt-3 "}`}
    onClick={( event ) => props.statusSelected( event,  props, false, props.id)} >
    
    <StatusButton
    bgColor = {props.status}
    type = {props.type}
    number = {props.approved}
    imgtype ="up"
    />
    </div>
    <div className = {`${props.type === "list" ? " imgTumbsDownlist  float-right " : "imgThumbsDown float-right pt-3 pr-5 ml-3 mr-5"}`} 
     onClick={( event ) => props.statusSelected( event,  props, true, props.id)} >
    <StatusButton
    bgColor = {props.status}
    type = {props.type}
    imgtype ="down"
    number = {props.rejected}
    />
     </div>
    
    </div>
  );
}
  export default DocInfoCard;