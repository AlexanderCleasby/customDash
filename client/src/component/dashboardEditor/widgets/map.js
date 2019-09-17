import React from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


export default class MapWidget extends widget{
    constructor(props){
        super(props)
        this.state={
            ...this.state,
            lng:this.props.ops ? this.props.ops.coords.lng : '',
            lat:this.props.ops ? this.props.ops.coords.lat : '',
            zoom:this.props.ops ? this.props.ops.zoomLevel : 1
        }
        
    }
    icon=faMap
    type="map"
    ops=()=>{
        return {coords:{lng:this.state.lng,lat:this.state.lat},zoomLevel:1}
    }
    renderBody(){
        return (
        <div>
            <div className="widgetControl">
                <label>Lat:</label>
                <input name="lat" type="number" value={this.state.lat} onChange={this.valChangeFloat}  />
            </div>
            <div className="widgetControl">
                <label>Lon:</label>
                <input name="lng" type="number" value={this.state.lng} onChange={this.valChangeFloat}  />
            </div>
        </div>)
    }
}