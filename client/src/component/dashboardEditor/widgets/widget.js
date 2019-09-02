import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./widget.scss";

export default class Widget extends Component {
  constructor(props) {
    super();
    this.state = {
        x:null,
        y:null,
        width:2,
        height:1
    };
  }

  valChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }


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
          </div>
          {this.renderBody()}
          <div>
            <input name="width" type="number" />
            <input name="height" type="number" />
          </div>
        </div>
      );

  }
}
