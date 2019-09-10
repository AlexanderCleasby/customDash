import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { DecimalToPercent } from "../../../utility/decimalToPercent";


export default  class MapWidgetDisplay extends Component  {
    constructor(...props){
        super()
    }
    
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    widgetStyles = ()=>({
            position:'absolute',
            top:DecimalToPercent(this.props.y/this.props.dashWidth),
            left:DecimalToPercent(this.props.x/this.props.dashHeight),
            height:DecimalToPercent(this.props.width/this.props.dashWidth),
            width:DecimalToPercent(this.props.height/this.props.dashHeight) 
            /* TODO: the way height and width are handled by the Dashboard editor is clearly mixed up, when that is fixed this method will nees to be fixed */ 
    })

    render() {
        console.log(this.props)
        return (
            <div style={this.widgetStyles()} >
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                defaultCenter={this.props.ops.coords}
                defaultZoom={this.props.zoom}
                options={{disableDefaultUI: true}}
                yesIWantToUseGoogleMapApiInternals
                />
            </div>
          
        );
      }
}


