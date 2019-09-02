import React from 'react';
import widget from './widget'
import { faMap } from '@fortawesome/free-solid-svg-icons'


export default class MapWidget extends widget{
    constructor(){
        super()
    }
    icon=faMap
    renderBody(){
        return <div>map Specfic body goes here</div>
    }
}