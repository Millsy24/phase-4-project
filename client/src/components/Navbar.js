import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar">
            <p className="Link" >
                <Link to="/">Login</Link>
            </p>
            <p className="Link" >
                <Link to="/AllListings">View Listings</Link>
            </p>
            <p className="Link" >
                <Link to="/Renter">Become a Renter</Link>
            </p>
        </div>
    );

}

export default Navbar