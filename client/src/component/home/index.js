import React, {Component} from 'react'
import Dashboards from './dashboards'
import {connect} from 'react-redux'
import {dashboardSummary,dashboardDetail} from '../../utility/apiCalls'
import dashboardActions from '../../actions/dashboardActions'
class Home  extends Component{

    componentDidMount(){
        if (this.props.dashboards.length === 0) {
            dashboardSummary()
            .then(res => this.props.updateDashboards(res))
            .then(()=>dashboardDetail()
                .then(res => this.props.updateDashboards(res))
            )
        }
    }

    render(){
        return <div className="Home">
            <Dashboards dashboards={this.props.dashboards} />
        </div>
    }
}

export default connect(state=>({dashboards:state.dashboards}),dashboardActions)(Home)