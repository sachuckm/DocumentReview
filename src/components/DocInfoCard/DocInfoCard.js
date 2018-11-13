import React from 'react';
import style from './DocInfoCard.css';
import StatusButton from '../StatusButtons/StatusButtons'
const thumbsUp = require('./../../resource/images/thumbs_up.png');
const thumbsdown = require('./../../resource/images/thumbs_down.png');


function DocInfoCard (props) {
  const selected = props.isSelected ? 'selected' : '';
  return (
    
    <div  className = {`${selected} ${props.cssClassName}`}>
    
    <span onClick={( event ) => props.docSelected( event,  props)} className = "nameField">{props.name}</span>
    <div className ={`${props.type === "list" ? "imgThumbsUpList" : "imgThumbsUp"}`}
    onClick={( event ) => props.statusSelected( event,  props, true)} >
    <StatusButton
    img = {thumbsUp}
    bgColor = {props.status}
    type = {props.type}
    imgtype ="up"
    /><p className ="countUp">{props.approved}</p>
    </div>
     <div className = {`${props.type === "list" ? "imgThumbsDownList" : "imgThumbsDown"}`} 
     onClick={( event ) => props.statusSelected( event,  props, false)} >
    <StatusButton
    img = {thumbsdown}
    bgColor = {props.status}
    type = {props.type}
    imgtype ="down"
    /><p className ="countDown">{props.rejected}</p></div>
 
    <hr className = "line"/>
    </div>
  );
}
  export default DocInfoCard;