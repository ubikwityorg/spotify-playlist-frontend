import React from 'react';
import './styles.css'

 export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className= "site-title">Worship-Gen</a>
        <ul>
            <li className="active">
                <a href="/song-finder">Song Finder</a>
            </li>
            <li>
                <a href="/about">About</a>
             </li>
        </ul> 
    </nav>
    );
 }