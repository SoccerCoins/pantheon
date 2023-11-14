import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/dining">Dining</Link>
                <Link to="/activities">Activities</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
