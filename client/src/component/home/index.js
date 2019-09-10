import React, {Component} from 'react'
import Dashboards from './dashboards'
import {dashboardSummary} from '../../utility/apiCalls'

export default class Home  extends Component{

    constructor(){
        super()
        this.state = {
            dashboards:[]
        }
    }

    componentDidMount(){
        dashboardSummary().then(res=>this.setState({dashboards:res}))
    }


    render(){
        return <div className="Home"><Dashboards dashboards={this.state.dashboards} /></div>
    }
}