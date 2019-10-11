import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./widget.scss";

export default class Widget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      x:this.props.x||null,
      y:this.props.y||null,
      width:this.props.width||2,
      height:this.props.height||1
  };
  }
  
  dimChange=(e)=>{
    this.setState({[e.target.name]:parseInt(e.target.value)},this.props.forceUpdate)
  }

  componentDidMount(){
    if (this.props.addToPlaced){
      this.props.addToPlaced(this)}
  }
  

  valChangeInt=(e)=>{
    this.setState({[e.target.name]:parseInt(e.target.value)})
  }

  valChange=(e)=>this.setState({[e.target.name]:e.target.value})

  valChangeFloat=(e)=>this.setState({[e.target.name]:parseFloat(e.target.value)})

  render() {
    //React throws out the drag
      return (
        <div className="widget">
          <div
            className="widgetHeader"
          >
            <div className="logo"
                          draggable
                          onDragStart={e=>this.props.handleDragStart(e,this)}
                          onDragEnd={this.props.hadnleDragEnd}
                          onDrop={this.props.placeWidget}
                          style={{backgroundColor:this.props.color}}> 
            <FontAwesomeIcon
              icon={this.icon}
            />
            </div>
            <div className="logo trash" onClick={()=>this.props.deleteWidget(this.props.id)}>
              <FontAwesomeIcon
                icon={faTrashAlt}
              />
            </div>
          </div>
          {this.renderBody()}
          {()=>{if(!this.props.hideDims){
            return (<div>
              <input name="width" type="number" onChange={this.dimChange} value={this.state.width} className="sizeInput" />
              <input name="height" type="number" onChange={this.dimChange} value={this.state.height} className="sizeInput"  />
            </div>)
        }}}
        </div>
      );

  }
}
