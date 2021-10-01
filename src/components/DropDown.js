import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem } from './MenuItem'
import './DropDown.css'
import { useState } from 'react'

export default function DropDown() {
    const [click, setclick] = useState(false)

    const handleClick=()=>setclick(!click)
    return (
        <>
        <ul onClick={handleClick} className={click?'dropdown-menu clicked':'dropdown-menu'}>
            {MenuItem.map((item,i)=>{
                return <li key={i}>
                    <NavLink className={item.cName} to={item.path} onClick={()=>setclick(false)}>
                        {item.title}
                    </NavLink>
                    </li>
            })}
        </ul>
            
        </>
    )
}
