export default (state = {},action)=>{
    debugger
    switch (action.type){
        case "CHANGE_USER":
            return action.user
        default:
            return state

    }
}