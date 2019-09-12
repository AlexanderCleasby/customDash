import React, { Component } from "react";
import Cell from "./cell";
import { DecimalToPercent } from "../../../utility/decimalToPercent";

import "./matrix.scss";

export default class Matrix extends Component {

  cellStyle = {
    width: DecimalToPercent(100 / this.props.width)
  };

  rowStyle = {
    height: DecimalToPercent(100 / this.props.height)
  };

  isCellHighlighted = (x, y) => {
    
    if (this.props.pickedUpWidget.state.x != null
    &&
     (x >= this.props.pickedUpWidget.state.x && x < this.props.pickedUpWidget.state.x + this.props.pickedUpWidget.state.width)
    &&
    (y >= this.props.pickedUpWidget.state.y && y < this.props.pickedUpWidget.state.y + this.props.pickedUpWidget.state.height)){
      
      return this.props.pickedUpWidget.props.color
    }
    else{
      if (this.props.placedWidgets.length){
        let matchedTracker =  this.props.placedWidgets.find((widget)=>{
          let dim=widget.state
          return((dim && x>=dim.x && x < dim.x+dim.width  && x < dim.x + dim.width)
          &&
          (y >= dim.y && y < dim.y + dim.height))
        })
      return (matchedTracker ? matchedTracker.props.color : null) 
    }
  }
    
  };

  render() {
    return (
      <div className="matrix">
        {Array.from(new Array(this.props.height), (x, i) => (
          <div key={i} className="EditorRow" style={this.rowStyle}>
            {Array.from(new Array(this.props.width), (x, j) => (
              <Cell
                key={i*this.props.height+j}
                handleDragOver={this.props.handleDragOver}
                dropWidget={this.props.dropWidget}
                coords={{ x: i, y: j }}
                style={this.cellStyle}
                highlighted={this.isCellHighlighted(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
