import React from 'react'
//import moment from "moment";
import { faClock } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import Widget from '../widget';


export default class WorldClock extends Widget {
    constructor(props){
        super(props)
        this.state={
            ...this.state,
            timeZone:""
        }
    }
    selectable = [
        "America/Los_Angeles",
        "America/New_York",
        "Asia/Shanghai"
    ]
    displayZone=(zone)=>zone.split('/')[1].replace("_"," ")
    ops=()=>({timeZone:this.state.timeZone})
    icon=faClock
    renderBody(){
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