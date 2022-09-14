import React from "react";
import {useState} from "react";
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit (e) {
        e.preventDefault()

        const user = {
            email,
            password
        }

        fetch("/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
        
        body: JSON.stringify(user)
        })


    }




    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleSubmit}>
                <input placeholder="email" onChange ={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login