import React,{ Component, Fragment } from 'react';
import {connect} from 'react-redux'
import Fullscreen from "react-full-screen";
import { Button } from 'reactstrap'
import Ticker from './widgets/ticker/ticker'
import Map from './widgets/map'
import WorldClock from './worldClock'
import './display.scss'
class Display extends Component{

    constructor(props){
        super(props)
        this.state={
            widgets: props.dashboard ? this.createWidgets(props.dashboard.widgets) : [],
            isFull:false
        }
    }

    createWidgets=(widgets)=>{
        
        return widgets.map((widget,i)=>{
            widget.dashHeight=this.props.dashboard.height
            widget.dashWidth=this.props.dashboard.width
            switch (widget.widget_type) {
                case "map":
                    return <Map key={i} {...widget} />
                case "ticker":
                    return <Ticker key={i} {...widget} />
                case "worldClock":
                    return <WorldClock key={i} {...widget} />
                default:
                    return <div />
            }
        })
    }

    render(){
        return (
            <div className="Home">
                <Fullscreen enabled={this.state.isFull}onChange={ isFull => this.setState({isFull})}>
                    <div className="full-screenable-node display">
                        {this.state.widgets}
                    </div>
                </Fullscreen>
                <Button block size="lg" color="primary" className="FullScreenButton" onClick={()=>this.setState({isFull:true})} >
                    Go Fullscreen
                </Button>
            </div>
        )
    }
} 


export default connect((state, props)=>({dashboard:state.dashboards.find(dash=>dash.id===+props.match.params.id)}))(Display)