import React, {
  Component, Fragment
} from 'react';
import './dashboardEditor.scss'
import {Button} from 'reactstrap'
import randomColor from 'randomcolor'
import uuid from 'uuid'
import TickerWidget from './widgets/ticker'
import MapWidget from './widgets/map'
import Matrix from './matrix/matrix'



export default class DashBoardEditor extends Component {
  constructor(props){
    super()
    this.state={
      name:'',
      placedWidgets:[],
      stagedWidgets:[],
      pickedUpWidget:{state:{x:null,y:null,width:0,height:0}},
      width:props.width||5,
      height:props.height||5,
      newWidgetType:this.widgetTypes[0]
    }
  }

  randomColor=()=>randomColor({luminosity: 'light'})

  pushToCloud = ()=>{
    fetch(`/dashboards/?token=${localStorage.dashToken}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST",
      body: JSON.stringify({
            dashboard: {
              name: this.state.name,
              width: this.state.width,
              height: this.state.height,
            },
            widgets:this.state.placedWidgets.map((widget)=>({
              widget_type:widget.type,
              ops:widget.ops(),
              x:widget.state.x,
              y:widget.state.y,
              width:widget.state.width,
              height:widget.state.height
            }))
      })
    })
  }

  widgetTypes=["Map","Ticker"]

  createNewWidget=()=>{
    let newWidget
    switch (this.state.newWidgetType) {
      case "Map":
        newWidget=<MapWidget id={uuid()} color={randomColor()} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} />
        break;
      case "Ticker":
        newWidget=<TickerWidget id={uuid()} color={randomColor()} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} />
        break
      default:
        return false
        break;
    }
    console.log(newWidget)
    this.setState({"stagedWidgets":[...this.state.stagedWidgets,newWidget]})
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
    console.log(this)
    this.setState({pickedUpWidget:widget})
  };

  hadnleDragEnd=(e)=>{
    e.preventDefault()
    this.setState({pickedUpWidget:{state:{...this.state.pickedUpWidget,x:null,y:null}}})
  }

  valchange = (e)=>this.setState({[e.target.name]:e.target.value})
  valchangeInt = (e)=>this.setState({[e.target.name]:parseInt(e.target.value)})

  render() {
    return ( 
        <Fragment>
          <div className="nameHeader">
            <label>Name:</label>
            <input name="name" onChange={this.valchange} value={this.state.name} />
          </div>
        <div className = "DashBoardEditor" >
        
          <Matrix dropWidget={this.dropWidget}  pickedUpWidget={this.state.pickedUpWidget} handleDragOver={this.handleMatrixDragOver} placedWidgets={this.state.placedWidgets} width={this.state.width} height={this.state.height} / >
          <div className='sidebar'>
            {this.state.stagedWidgets}
            <div className='footer'>
              <a>New Widget:</a>
              <select name="newWidgetType" onChange={this.valchange}>
                {this.widgetTypes.map((type)=><option>{type}</option>)}
              </select>
              <Button onClick={this.createNewWidget}>Create</Button>
            </div>
          </div>
          <label>Width: </label><input name="width" type="number" onChange={this.valchangeInt} value={this.state.width} />
          <label>Height: </label><input name="height" type="number" onChange={this.valchangeInt} value={this.state.height} />
          <Button onClick={this.pushToCloud}>Submit</Button>
        </div>
        </Fragment>
      
    )
  };
}