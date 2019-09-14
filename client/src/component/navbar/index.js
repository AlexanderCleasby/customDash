
import React from 'react'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

export default  ()=>{
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
        </Navbar>
    )
    
}