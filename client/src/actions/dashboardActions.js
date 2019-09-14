export default (dispatch) => ({
    updateDashboards: (dashboards) => dispatch({
        type: "UPDATE_DASHBOARDS",
        dashboards: dashboards
    })
})