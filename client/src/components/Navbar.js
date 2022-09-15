import React from "react";
import { Link } from "react-router-dom";

function Navbar({setCurrentUser}) {
    
    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        setCurrentUser(null)
        window.location.reload(true)
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