import React from 'react';
import './DisplayAreaCoponent.css';

function DisplayAreaCoponent (props) {
    const text  =  <p>This section is provided to explain and demonstrate the styles available in the Word template attached to this sample document. It is important to use the styles provided in the template consistently and to avoid defining new styles or using raw formatting.
    Delete this entire section when using this sample document to begin writing a new specification  
    This section is provided to explain and demonstrate the styles available in the Word template attached to this sample document. It is important to use the styles provided in the template consistently and to avoid defining new styles or using raw formatting.
    Delete this entire section when using this sample document to begin writing a new specification  
    This section is provided to explain and demonstrate the styles available in the Word template attached to this sample document. It is important to use the styles provided in the template consistently and to avoid defining new styles or using raw formatting.
    Delete this entire section when using this sample document to begin writing a new specification  
    This section is provided to explain and demonstrate the styles available in the Word template attached to this sample document. It is important to use the styles provided in the template consistently and to avoid defining new styles or using raw formatting.
    Delete this entire section when using this sample document to begin writing a new specification    
    </p>
  return (
    <div className= "displayAreaCmp">
    {text}
    <button className = "downloadButton" onClick={( event ) => props.openLink( event,  props.link)} >Download Full Document</button>
    <br/>
    </div>
  );
}
  export default DisplayAreaCoponent;