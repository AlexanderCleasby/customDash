import React, {Component} from 'react'
import Dashboards from './dashboards'
import {connect} from 'react-redux'
import {dashboardSummary} from '../../utility/apiCalls'
import dashboardActions from '../../actions/dashboardActions'
class Home  extends Component{

    componentDidMount(){
        dashboardSummary()
        .then(res=>this.setState(this.props.updateDashboards(res)))
    }

    render(){
        return <div className="Home">
            <Dashboards dashboards={this.props.dashboards} />
        </div>
    }
}

export default connect(state=>({dashboards:state.dashboards}),dashboardActions)(Home)