export default (state = {},action)=>{
    
    switch (action.type){
        case "CHANGE_USER":
            return {name:action.user.name}
        default:
            return state

    }
}