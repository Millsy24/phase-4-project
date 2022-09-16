import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

function Navbar() {
    const [currentUser, setCurrentUser] = useState('')

useEffect(()=> {
fetch(`/auth`)
.then(res => {
  if (res.ok){
    res.json().then(user => setCurrentUser(user))
  }
})
}, [])

    const navigate = useNavigate()
    
    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => {
            setCurrentUser(null)
            navigate('/')
        })
        
        
    }



    return (
        <div className="navbar">
            <p className="Link" >
                <Link to="/signup">Signup</Link>
            </p>
            <p className="Link" >
                <Link to="/listings">View Listings</Link>
            </p>
            <p className="Link" >
                <Link to="/renter">Become a Renter</Link>
            </p>
            <p className ="Link">
                <Link to="/login">Login</Link>
            </p>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    );

}

export default Navbar