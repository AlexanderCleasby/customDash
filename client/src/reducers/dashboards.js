export default (state = [],action)=>{
    switch (action.type){
        case "UPDATE_DASHBOARDS":
            return action.dashboards
        case "SAVE_DASHBOARD":
            return state.filter((dashboard=>dashboard.id != action.dashboard.id)).concat(action.dashboard)
        default:
            return state
    }


}