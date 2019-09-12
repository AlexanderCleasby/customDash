import React from 'react'
import {Button, ListGroup,ListGroupItem} from 'reactstrap'

export default (props)=>{
    return <ListGroup>
        {props.dashboards.map((dashboard,i)=>(
        <ListGroupItem key={i}>{dashboard.name}
            <Button style={{float:"right"}} color="success" href={`/display/${dashboard.id}`}>
                Display
            </Button>
            <Button style={{float:"right"}} color="warning" href={`/edit/${dashboard.id}`}>
                Edit
            </Button>
        </ListGroupItem>))}
        </ListGroup>
}