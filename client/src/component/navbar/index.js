
import React from 'react'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

export default  ()=>{
    return <Nav color="dark">
        <NavbarBrand>
            <Link to="/">
                Custom Dash
            </Link>
        </NavbarBrand>
            <NavItem >
                <NavLink>
                    <Link to="/new" >
                        New
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    
}