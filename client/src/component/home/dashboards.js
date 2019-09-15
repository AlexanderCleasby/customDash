import React from 'react'
import {Button, ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'

export default (props)=>{
    return <ListGroup>
        {props.dashboards.map((dashboard,i)=>(
        <ListGroupItem key={i}>{dashboard.name}
            <Button style={{float:"right"}} color="success" tag={Link} to={`/display/${dashboard.id}`}>
                Display
            </Button>
            <Button style={{float:"right"}} color="warning" tag={Link} to={`/edit/${dashboard.id}`} >
                Edit
            </Button>
        </ListGroupItem>))}
        </ListGroup>
}