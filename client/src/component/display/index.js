import React,{ Component, Fragment } from 'react';
import Fullscreen from "react-full-screen";
import { Button } from 'reactstrap'
import Ticker from './widgets/ticker/ticker'
import Map from './widgets/map'
import './display.scss'
export default class Display extends Component{

    constructor(){
        super()
        this.state={
            widgets:[],
            dashHeight:5,
            dashWidth:5,
            isFull:false
        }
    }

    componentDidMount(){

        
        fetch(`/dashboards/${this.props.match.params.id}/?token=${window.localStorage.dashToken}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            this.setState({dashHeight:res.height})
            this.setState({dashWidth:res.width})
            this.setState({widgets:this.createWidgets(res.widgets)})
        })
    }

    createWidgets=(widgets)=>{
        
        return widgets.map((widget)=>{
            widget.dashHeight=this.state.dashHeight
            widget.dashWidth=this.state.dashWidth
            switch (widget.widget_type) {
                case "map":
                    return <Map {...widget} />
                case "ticker":
                    return <Ticker {...widget} />
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