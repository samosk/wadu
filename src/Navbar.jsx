// Navbar.jsx

import React from "react";
import { Link } from "react-router";
const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </>
    );
};

export default Navbar;