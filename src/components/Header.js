import React from 'react';
import '../sass/Header.css';
import headerImage from '../imgs/header-image.jpg';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">Welcome to our Website</h1>
                <p className="header-desc">
                    Here is the right place for you...
                </p>
            </div>
            <div className="header-image">
                <img src={headerImage} alt="header-image"/>
            </div>
        </header>
    )
}

export default Header;
