import {dashboardSummary,dashboardDetail} from "../utility/apiCalls"

export const importDashboardDetail = ()=>{
    return (dispatch)=>{
        return dashboardSummary()
            .then(dashboards => dispatch({type:"UPDATE_DASHBOARDS",dashboards:dashboards}))
            .then(()=>dashboardDetail()
            .then(dashboards=>dispatch({type:"UPDATE_DASHBOARDS",dashboards:dashboards})))
    }
}

export const updateDashboard = (dispatch)=>{
    return (dashboard)=>{
        dispatch({type:"SAVE_DASHBOARD",dashboard:dashboard})}}
    
