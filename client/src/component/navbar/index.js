
import React from 'react'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

export default  ()=>{
    return <Nav color="dark" className="bg-dark">
        <NavbarBrand className="text-light">
            <Link className="text-light nav-link" to="/">
            Custom Dash
            </Link>
        </NavbarBrand>
            <NavItem >
                <NavLink>
                    <Link className="text-light nav-link" to="/new" >
                        New
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    
}