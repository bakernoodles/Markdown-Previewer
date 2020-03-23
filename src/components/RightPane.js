import React from 'react';
import '../componentStyles/rightPane.css';
let marked = require('marked');

const rightPane = (props) =>{
    let convertedMarked = marked(props.txtInput)
    
    return <div 
            id="preview" 
            className="rightPane" 
            dangerouslySetInnerHTML = {{__html: convertedMarked}}/>   
}

export default rightPane;