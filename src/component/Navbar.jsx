import React from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="header">
            <Link to="/">General</Link>
            <Link to="/world">World</Link>
            <Link to="/politics">Politics</Link>
            <Link to="/daily">Daily</Link>
            <Link to="/sports">Sports</Link>
        </header>
    );
}
export default Navbar;