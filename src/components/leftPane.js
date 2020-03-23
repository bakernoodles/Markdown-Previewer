import React from 'react';
import '../componentStyles/leftPane.css'

const LeftPane = (props) => {
    return <div className="leftPane">
             <textarea 
                value={props.txtInput} 
                onChange={props.updateTxt} 
                id="editor" 
                className="htmlInput"
            />
           </div>
} 
export default LeftPane;

