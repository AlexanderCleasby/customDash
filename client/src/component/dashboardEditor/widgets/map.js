import React, {Component} from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


class MapWidget extends Component{

    constructor(props){
        super(props)
        if(!props.ops.coords){
            props.changeOptions({coords:defaultCoords})
        }
    }

    changeCoords=(e)=>{
        let coords = {...defaultCoords,...this.props.ops.coords}
        this.props.changeOptions({coords:{...coords,[e.target.name]:e.target.value}})
    }

    valChangeFloat=(e)=>this.setState({[e.target.name]:parseFloat(e.target.value)})

    coords=()=>({
        lat: this.props.ops.coords ? this.props.ops.coords.lat : defaultCoords.lat,
        lng: this.props.ops.coords ? this.props.ops.coords.lng : defaultCoords.lng
    })

    render(){
        return (
        <div>
            <div className="widgetControl">
                <label>Lat:</label>
                <input name="lat" type="number" value={this.coords().lat} onChange={this.changeCoords}  />
            </div>
            <div className="widgetControl">
                <label>Lon:</label>
                <input name="lng" type="number" value={this.coords().lng} onChange={this.changeCoords}  />
            </div>
        </div>)
    }
}

const defaultCoords = {
	lat: 40.7128,
	lng: -74.006
};

export default widget(MapWidget,{icon:faMap})
