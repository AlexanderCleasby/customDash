
import React from 'react'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'
import './navbar.scss'

export default  (props)=>{
    return (
        <Navbar color="dark" dark expand="md">
            <Nav color="dark" className="bg-dark" navbar>
                <NavbarBrand className="text-light" tag={Link} to="/">
                    Custom Dash
                </NavbarBrand>
                <NavItem  >
                    <NavLink className="text-light" tag={Link} to="/new">
                        New    
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem className="text-light">
                    <NavLink onClick={props.logOut}>Log Out {props.user.name}</NavLink>
                </NavItem >
                <NavItem >
                    <img src={props.user.avatar_url} />
                </NavItem>
            </Nav>
        </Navbar>
    )
    
}