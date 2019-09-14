export default (state = [],action)=>{
    switch (action.type){
        case "UPDATE_DASHBOARDS":
            return action.dashboards
        default:
            return state
    }


}