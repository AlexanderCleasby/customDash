import React from 'react'
import {Button, ListGroup,ListGroupItem} from 'reactstrap'

export default (props)=>{
    return <ListGroup>
        {props.dashboards.map((dashboard,i)=><ListGroupItem key={i}>{dashboard.name}<Button color="success" href={`/display/${dashboard.id}`}>Display</Button></ListGroupItem>)}
        </ListGroup>
}