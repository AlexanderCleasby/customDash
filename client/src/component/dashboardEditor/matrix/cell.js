import React from 'react';



export default (props)=>{
  return (    
    <div
      style={props.highlighted ? {...props.style,backgroundColor:props.highlighted} : props.style}
      className="EditorCell"
      onDrop={props.dropWidget}
      onDragOver={(e)=>{e.preventDefault()}}
      onClick={(e)=>{
        props.handleDragOver(e,props.coords)
        props.dropWidget()
      }}
      onDragEnter={(e)=>{
        props.handleDragOver(e,props.coords)
      }}
      
    />
  );
}
