import React, {
  Component, Fragment
} from 'react';
import './dashboardEditor.scss'
import {Button} from 'reactstrap'
import randomColor from 'randomcolor'
import {getDashboard, saveDashboard} from '../../utility/apiCalls'
import {updateDashboard} from '../../actions/dashboardActions'
import uuid from 'uuid'
import TickerWidget from './widgets/ticker'
import MapWidget from './widgets/map'
import Matrix from './matrix/matrix'
import {connect} from 'react-redux'

class DashBoardEditor extends Component {
  constructor(props){
    super(props)
    let dashboard=props.dashboards.find((dashboard)=>dashboard.id===parseInt(props.match.params.id))
    this.state={
      name:dashboard ? dashboard.name : '',
      placedWidgets:[],
      stagedWidgets:[],
      pickedUpWidget:{state:{x:null,y:null,width:0,height:0}},
      width:dashboard ? dashboard.width:5,
      height:dashboard ? dashboard.height:5,
      newWidgetType:this.widgetTypes[0]
    }
  }

  componentDidMount(){
    
    let dashboard=this.props.dashboards.find((dashboard)=>dashboard.id===parseInt(this.props.match.params.id))
    if (dashboard) {
      this.importDashboard(dashboard)
    } else if(this.props.match.params.id){
      getDashboard(this.props.match.params.id)
        .then(res=>this.importDashboard(res))
    }
    //TODO: this should add the one dashboard to the redux store.
  }

  randomColor=()=>randomColor({luminosity: 'light'})

  pushToCloud = ()=>{
    //debugger
    saveDashboard(this.props.match.params.id,this.state)
    .then(res=>{this.props.updateDashboard(res)})
    .then(()=>this.props.history.push(`/display/${this.props.match.params.id}`))
  }

  importDashboard = (dashboard)=>{
    this.setState((prevState) => ({
      ...prevState,
      name: dashboard.name,
      width: dashboard.width,
      height: dashboard.height,
      stagedWidgets: dashboard.widgets.map((widget) => this.createNewWidget(widget.widget_type, widget))
    }))
  }

  widgetTypes=["Map","Ticker"]

  createNewWidget=(type,widget)=>{
    if(widget){
      widget.addToPlaced=this.addToPlaced
      widget.placed=true
    }

    let newWidget
    switch (type.toLowerCase()) {
      case "map":
        newWidget=<MapWidget key={uuid()} id={uuid()} {...widget}  color={randomColor()} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} deleteWidget={this.deleteWidget} />
        break;
      case "ticker":
        newWidget=<TickerWidget key={uuid()} id={uuid()} {...widget} color={randomColor()} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} deleteWidget={this.deleteWidget} />
        break
      default:
        return false
    }
    return newWidget
  }

  addToPlaced=(widget)=>{
    this.setState((prevState)=>{
      return {...prevState,placedWidgets:[...prevState.placedWidgets,widget]}
    })
  }

  deleteWidget=(id)=>{
    this.setState({stagedWidgets:this.state.stagedWidgets.filter((widget)=>widget.props.id!==id)})
    this.setState({placedWidgets:this.state.placedWidgets.filter((widget)=>widget.props.id!==id)})
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
            <div className="main">
              {this.state.stagedWidgets}
            </div>
            <div className='footer'>
              <label>New Widget:</label>
              <select name="newWidgetType" onChange={this.valchange}>
                {this.widgetTypes.map((type,i)=><option key={i}>{type}</option>)}
              </select>
              <Button onClick={()=>this.setState({"stagedWidgets":[...this.state.stagedWidgets,this.createNewWidget(this.state.newWidgetType)]})}>Create</Button>
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

export default connect(state=>state, (dispatch)=>({updateDashboard:updateDashboard(dispatch)}))(DashBoardEditor)

