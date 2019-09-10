import React from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


export default class MapWidget extends widget{
    constructor(){
        super()
        this.state={
            lng:null,
            lat:null,
            zoom:1
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
            <label>Lon:</label>
            <input name="lng" type="number" onChange={this.valChangeFloat}  />
            <label>Lat:</label>
            <input name="lat" type="number" onChange={this.valChangeFloat}  />
        </div>)
    }
}