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

   options = {
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false
    }

    formatCoords = ()=>(
        Object.keys(this.props.ops.coords).reduce(
            (acc,key)=>{
                acc[key] = parseFloat(this.props.ops.coords[key])
                return acc
            },{}
        )
    )


    widgetStyles = ()=>({
            position:'absolute',
            top:DecimalToPercent(this.props.x/this.props.dashHeight),
            left:DecimalToPercent(this.props.y/this.props.dashWidth),
            height:DecimalToPercent(this.props.width/this.props.dashWidth),
            width:DecimalToPercent(this.props.height/this.props.dashHeight) 
            /* TODO: the way height and width are handled by the Dashboard editor is clearly mixed up, when that is fixed this method will nees to be fixed */ 
    })

    render() {
        console.log(this.props)
        return (
            <div className={"displayWidget"} style={this.widgetStyles()} >
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                defaultCenter={this.formatCoords()}
                defaultZoom={this.props.zoom}
                options={this.options}
                yesIWantToUseGoogleMapApiInternals
                />
            </div>
          
        );
      }
}


