export function dashboardSummary() {
    return new Promise((resolve, reject) => {
        fetch(`/dashboards/?token=${window.localStorage.dashToken}`)
            .then(res => res.json())
            .then(res => resolve(res))
    })
}