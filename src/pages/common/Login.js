import React, { useState } from 'react'

export default function Login() {

    const [registeredEmail, setregisteredEmail] = useState("")
    const [registeredPassword, setregisteredPassword] = useState("")

    let sendData = new FormData();
    sendData.append(registeredEmail)
    sendData


    const getData = ()=>{
        const response = fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php")
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text"/>
            <input type="password"/>
            <button onClick={getData}>LOGIN</button>
        </div>
    )
}
