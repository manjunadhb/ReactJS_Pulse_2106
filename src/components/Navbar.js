import React from 'react'
import {Button} from './Button'
import DropDown from './DropDown'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <nav className="navBar">
            <NavLink className="navbar-brand" to="https://pulse.brninfotech.com">Navbar</NavLink>
            <NavLink to ="/"></NavLink>

        </nav>
            
        </>
    )
}
