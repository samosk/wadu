// Navbar.jsx

import React from "react";
import { Link } from "react-router";
const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <Link to="/wadu">Home</Link>
                <Link to="/wadu/about">About</Link>
                <Link to="/wadu/contact">Contact Us</Link>
            </div>
        </>
    );
};

export default Navbar;