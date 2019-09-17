export function dashboardSummary() {
    return new Promise((resolve, reject) => {
        fetch(`/dashboards/?token=${window.localStorage.dashToken}`)
            .then(res => res.json())
            .then(res => resolve(res))
    })
}

export function dashboardDetail(){
    return new Promise((resolve, reject) => {
        fetch(`/dashboards/?token=${window.localStorage.dashToken}&detail=true`)
        .then(res => res.json())
        .then(res => resolve(res))
})
}

export function getDashboard(id){
    return new Promise((resolve,reject) => {
        fetch(`/dashboards/${id}/?token=${window.localStorage.dashToken}`)
        .then(res => res.json())
        .then(res => resolve(res))
    })
}

export function saveDashboard(id, dashboard) {

    return new Promise((resolve)=>{
    let [route, method] = id ? [`/dashboards/${id}`, "PUT"] : [`/dashboards`, "POST"]
    fetch(`${route}/?token=${localStorage.dashToken}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: method,
            body: JSON.stringify({
                dashboard: {
                    name: dashboard.name,
                    width: dashboard.width,
                    height: dashboard.height,
                },
                widgets: dashboard.placedWidgets.map((widget) => ({
                    id: widget.props.id,
                    widget_type: widget.type,
                    ops: widget.ops(),
                    x: widget.state.x,
                    y: widget.state.y,
                    width: widget.state.width,
                    height: widget.state.height
                }))
            })
        })
        .then(res => res.json())
        .then(res=>resolve(res))
    })
}
