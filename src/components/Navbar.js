import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/home" className= "site-title">Worship-Gen</Link>
        <ul>
            <li className="active">
                <Link to="/song-finder">Song Finder</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
             </li>
        </ul> 
    </nav>
    );
 }