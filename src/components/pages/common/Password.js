import React from 'react';
import { NavLink } from 'react-router-dom';
import StaticLogo from './StaticLogo';
import '../../styles/Login.css';
import '../../styles/Password.css';
import StaticLink from './StaticLink';

export default function Password() {
    return (
        <div className="login">
            <StaticLogo />
            <div className="loginForm">
                <h2>Forgot Password ?</h2>
                <p>
                    Enter your registered e-mail address below to get your password to e-mail.
                </p>
                <input type="text" placeholder="Email" />
                <div className="pButton"> 
                <NavLink to="/">Back</NavLink>
                <button onClick={()=>alert("under maintance")}>SUBMIT</button>
                </div>

            </div>
            <StaticLink/>
        </div>
    )
}
