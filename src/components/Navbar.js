// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav>
            <h2 style={{ color: '#FFFFFF' }}>Inside the <span style={{ color: '#E0B0FF' }}>Mind</span> of Annie</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project1">Project 1</Link></li>
                <li><Link to="/project2">Project 2</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
