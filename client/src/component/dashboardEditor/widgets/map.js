import React, {Component} from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


class MapWidget extends Component{
    constructor(props){
        super(props)
        this.state={
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
    render(){
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

export default widget(MapWidget,{icon:faMap})
