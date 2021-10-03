import React from 'react'
import {NavLink} from 'react-router-dom'
import './Button.css';

export default function Button() {
    return (
        <div>
            <NavLink to='/'><button className='button'>Logout</button></NavLink>
        </div>
    )
}
