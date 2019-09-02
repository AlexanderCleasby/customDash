import React, {Component} from 'react';



export default class Cell extends Component{
    constructor(props){
        super()
        
    }
    

    render(){
        return (
            
            <div
              style={this.props.highlighted ? {...this.props.style,backgroundColor:this.props.highlighted} : this.props.style}
              className="EditorCell"
              onDrop={this.props.dropWidget}
              onDragOver={(e)=>{e.preventDefault()}}
              onDragEnter={(e)=>{
                this.props.handleDragOver(e,this.props.coords)
              }}
              
            />
          );
    }
}