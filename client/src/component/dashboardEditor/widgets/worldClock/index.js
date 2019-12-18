import React, { Component } from 'react'
//import moment from "moment";
import { faClock, faMap } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import Widget from '../widget';


class WorldClock extends Component {
    constructor(props){
        super(props)
        this.state={
            ...this.state,
            timeZone:this.selectable[0]
        }
    }
    selectable = [
        "America/Los_Angeles",
        "America/New_York",
        "Asia/Shanghai"
    ]
    displayZone=(zone)=>zone.split('/')[1].replace("_"," ")
    type="worldClock"
    ops=()=>({timeZone:this.state.timeZone})
    icon=faClock
    render(){
        return (
            <div>
                <select name="timeZone" onChange={this.valChange} >
                    {this.selectable.map((zone,i)=><option key={i} value={zone}>{this.displayZone(zone)}</option>)}
                </select>
            </div>
            )
    }
    
}

WorldClock.defaultProps = {width:1,height:1,hideDims:true}

export default Widget(WorldClock,{icon:faMap})