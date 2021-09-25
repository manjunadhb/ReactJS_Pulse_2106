import React, { useState } from 'react';
import validateLoginService, { json } from '../../services/ValidateLoginService';
import '../../styles/Login.css';
import { NavLink, useHistory } from 'react-router-dom';
import StaticLogo from './StaticLogo';
import StaticLink from './StaticLink';

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const validateLogin = async () => {
        console.log(user);
        console.log(password);
        console.log(history);
        alert("working");
        let jsonData = await validateLoginService(user, password);
        console.log(jsonData);
        console.log(json());
        jsonData.loggedIn === 'yes' ? (history.push('/home')) : (alert(jsonData.msg));
        // change the argument in the push function according the 1st page path .

    }

    return (
        <div>
            <StaticLogo />
            <div className="loginForm">
                <h2>Sign In</h2>
                <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <div className="loginButton">
                    <button onClick={validateLogin}>LOGIN</button>
                    <div className="label">
                        <input type="checkbox" /><span>Remember</span>
                    </div>
                    <NavLink to="/password">Forgot Password?</NavLink>
                </div >
                <div className="create">
                    <NavLink to="/signup">CREATE AN ACCOUNT</NavLink>
                </div>
            </div>
            <StaticLink/>
        </div>
    )
}
