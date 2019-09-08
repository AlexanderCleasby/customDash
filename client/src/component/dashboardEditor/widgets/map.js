import React from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


export default class MapWidget extends widget{
    constructor(){
        super()
        this.state={
            lon:null,
            lat:null,
            zoom:1
        }
    }
    icon=faMap
    type="map"
    ops=()=>{
        return {coords:{lon:this.state.lon,lat:this.state.lat},zoomLevel:1}
    }
    renderBody(){
        return <div>map Specfic body goes here</div>
    }
}