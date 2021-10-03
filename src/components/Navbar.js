import React  from 'react'
import Button from './Button'
import DropDown from './DropDown'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [click, setclick] = useState(false)
    const [dropdown, setdropdown] = useState(false)

    const handleClick=()=>setclick(!click)
    const closeMenu=()=>setclick(false)
    return (
        <>
        <nav className="navbar">
            <NavLink className="navbar-logo" to="https://pulse.brninfotech.com">Pulse</NavLink>
            <div className="menu-icon" onClick={handleClick}>
                    <i className={click?'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                
                <li className='nav-item'>
                    <NavLink to="/dashboard" className='nav-links' onClick={closeMenu}>Dashboard</NavLink>
                    {/* {dropdown && <DropDown/>} */}
                </li>

                <li className='nav-item'>
                    <NavLink to="/report" className='nav-links' onClick={closeMenu}>Report</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/manage" className='nav-links' onClick={closeMenu}>Manage</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/setting" className='nav-links' onClick={closeMenu}>Setting</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/home" className='nav-links' onClick={closeMenu}>Home</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/dsu" className='nav-links' onClick={closeMenu}>Daily Status Update</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/tasks" className='nav-links' onClick={closeMenu}>Tasks</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/leaves" className='nav-links' onClick={closeMenu}>Leaves</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/requests" className='nav-links' onClick={closeMenu}>Requests</NavLink>
                </li>

            </ul>
            <Button/>
        </nav>
            
        </>
    )
}
