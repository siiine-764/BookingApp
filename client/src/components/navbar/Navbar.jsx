import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <div className="logo">
                    🤰
                    </div>
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