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
                        <NavLink exact className="nav-link" aria-current="page" to="/dashbord">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/Report">Report</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/manage">Manage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/setting">Setting</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dsu">Daily Staus Update</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/messages">Messages</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/leaves">Leaves</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/requests">Requests</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/manageBatches">MB</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/manageBatches/edit"></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/manageBatches/delete"></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/manageBatches/addNewBatch"></NavLink>
                    </li> */}
         </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}
