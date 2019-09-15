import React from 'react';



export default (props)=>{
        return (
            
            <div
              style={props.highlighted ? {...props.style,backgroundColor:props.highlighted} : props.style}
              className="EditorCell"
              onDrop={props.dropWidget}
              onDragOver={(e)=>{e.preventDefault()}}
              onDragEnter={(e)=>{
                props.handleDragOver(e,props.coords)
              }}
              
            />
          );
    }
