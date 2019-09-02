import React, {
  Component
} from 'react';
//import Widget from './widgets/widget'
import TickerWidget from './widgets/ticker'
import MapWidget from './widgets/map'
import Matrix from './matrix/matrix'



export default class DashBoardEditor extends Component {
  constructor(){
    super()
    this.state={
      placedWidgets:[],
      pickedUpWidget:{state:{x:null,y:null,width:2,height:1}}
    }
  }

  dropWidget=(e,v)=>{
    if (!this.state.placedWidgets.find((widget)=>this.state.pickedUpWidget.props.id===widget.props.id)){
      this.setState({placedWidgets:[...this.state.placedWidgets,this.state.pickedUpWidget]})
    }
  }
  
  handleMatrixDragOver = (e,coords)=>{
    this.setState((prevState)=>{
      let newState = prevState.pickedUpWidget
      newState.state.x = coords.x
      newState.state.y = coords.y
      return {pickedUpWidget:newState}
      
    })
  }

  handleDragStart = (e,widget) => {
    this.setState({pickedUpWidget:widget})
  };

  hadnleDragEnd=(e)=>{
    e.preventDefault()
    this.setState({pickedUpWidget:{state:{...this.state.pickedUpWidget,x:null,y:null}}})
  }

  render() {
    return ( 
      
        <div className = "App container " >
          <Matrix dropWidget={this.dropWidget}  pickedUpWidget={this.state.pickedUpWidget} handleDragOver={this.handleMatrixDragOver} placedWidgets={this.state.placedWidgets} width={5} height={4} / >
          <div className='sidebar'>
            <TickerWidget id={1} color={"#FFCC22"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <TickerWidget id={2} color={"#FFACAA"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <MapWidget id={3} color={"#99cc22"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
          </div>
        </div>
      
    )
  };
}