export default (dispatch) => ({
    changeUser: (user) => dispatch({
        type: "CHANGE_USER",
        user: user
    })
})