import React from 'react'


export default (props)=>{
    return <div>
        {props.dashboards.map((dashboard,i)=><div key={i}>{dashboard.name}</div>)}
        </div>
}