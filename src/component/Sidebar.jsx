import React from "react";
import '../css/Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="sidebar">
            <Link to="/">General</Link>
            <Link to="/world">World</Link>
            <Link to="/politics">Politics</Link>
            <Link to="/daily">Daily</Link>
            <Link to="/sports">Sports</Link>
        </nav>
    );
}

export default Sidebar;