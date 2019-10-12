import React, { Component } from 'react'
import Moment from 'react-moment';
import { Textfit } from 'react-textfit';
import 'moment-timezone';
import { DecimalToPercent } from "../../../utility/decimalToPercent";
import './worldClock.scss'

export default class WorldClock extends Component{
    
    widgetStyles = ()=>({
        position:'absolute',
        top:DecimalToPercent(this.props.x/this.props.dashHeight),
        left:DecimalToPercent(this.props.y/this.props.dashWidth),
        height:DecimalToPercent(this.props.width/this.props.dashWidth),
        width:DecimalToPercent(this.props.height/this.props.dashHeight) 
        /* TODO: the way height and width are handled by the Dashboard editor is clearly mixed up, when that is fixed this method will nees to be fixed */ 
    })

    render(){
        return <div style={this.widgetStyles()} className={"timeDisplay displayWidget"}>
            <Textfit mode="single">
                <Moment tz={this.props.ops.timeZone} format={"hh:mm A"}></Moment>
            </Textfit>
            <div>
                {this.props.ops.timeZone.split("/")[1].replace("_"," ")}
            </div>
        </div>
    }
}