import React from 'react';
import style from './DocInfoCard.css';
import StatusButton from '../StatusButtons/StatusButtons'
const downloadbotton = require('./../../resource/images/Download-btn.png');

function DocInfoCard (props) {
  const selected = props.isSelected ? 'selected' : '';
  const arrow = props.isSelected ? (<p className ={`${props.isSelected ? "arrow" : '' }`}>></p>) : ''
  const downloadbtn = props.link ? (<img className = "downloadimg"  onClick={( event ) => props.openLink( event,  props.link)} src = {downloadbotton}/>) : ''
  const listitems = props.type === 'list' ? (<div>
        <hr className = "line"/>
        {arrow}
  </div>) : (<div>{downloadbtn}</div>)
  return (
    
    <div  className = {`${selected} ${props.cssClassName}`}>
    
    <span onClick={( event ) => props.docSelected( event,  props)} className = "nameField">{props.name}</span>
    <div className ={`${props.type === "list" ? "imgThumbsUpList" : "imgThumbsUp"}`}
    onClick={( event ) => props.statusSelected( event,  props, true)} >
    <StatusButton
    bgColor = {props.status}
    type = {props.type}
    imgtype ="up"
    /><p className ="countUp">{props.approved}</p>
    </div>
     <div className = {`${props.type === "list" ? "imgThumbsDownList" : "imgThumbsDown"}`} 
     onClick={( event ) => props.statusSelected( event,  props, false)} >
    <StatusButton
    bgColor = {props.status}
    type = {props.type}
    imgtype ="down"
    /><p className ="countDown">{props.rejected}</p></div>
    {listitems}
    </div>
  );
}
  export default DocInfoCard;