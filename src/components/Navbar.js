import React from 'react';
import '../sass/Navbar.css';

function Navbar() {
    return (
            <nav className="navbar">
                <a href="#" className="navbar-logo">LoGo...</a>
                <ul className="navbar-items">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Contact</li>
                    <li className="navbar-item">Products</li>
                </ul>
            </nav>
    )
}

export default Navbar;
