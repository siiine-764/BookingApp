import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                        <div className="logo">
                        🤰
                        </div>
                    </Link>
                    <div className="navItems">
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Navbar;