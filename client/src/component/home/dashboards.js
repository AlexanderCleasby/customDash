import React from 'react'


export default (props)=>{
    return <div>
        {props.dashboards.map((dashboard)=><div>{dashboard.name}</div>)}
        </div>
}