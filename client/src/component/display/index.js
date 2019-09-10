import React,{ Component } from 'react';
import Ticker from './widgets/ticker'
import Map from './widgets/map'
import './display.scss'
export default class Display extends Component{

    constructor(){
        super()
        this.state={
            widgets:[],
            dashHeight:5,
            dashWidth:5
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
                default:
                    return <div />
            }
        })
    }

    render(){
        return (
        <div className="display">
            {this.state.widgets}
        </div>
        )
    }
} 