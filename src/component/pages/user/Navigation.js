import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="https://pulse.brninfotech.com">Navbar</NavLink>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home/dsu">Daily Staus Update</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home/tasks">Tasks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home/messages">Messages</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home/leaves">Leaves</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home/requests">Requests</NavLink>
                    </li>



                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}
