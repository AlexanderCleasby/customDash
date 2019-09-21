export default (state = {},action)=>{
    
    switch (action.type){
        case "CHANGE_USER":
            return {name:action.user.name,
                avatar_url:action.user.avatar_url}
        case "LOG_OUT":
            localStorage.removeItem("dashToken")
            return {}
        default:
            return state

    }
}