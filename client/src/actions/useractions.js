export default (dispatch) => ({
    changeUser: (user) => dispatch({
        type: "CHANGE_USER",
        user: user
    }),
    logOut: () => dispatch({type:"LOG_OUT"})
})