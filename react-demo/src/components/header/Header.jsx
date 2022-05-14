import React from 'react';
import Nav from '../nav/Nav';
import './header.css';

export default function Header() {
    return <section className='top-nav'>
        <h2><a href="/" className="menu__link">Marta Martinez Rocher</a></h2>
        <span className="nav-bar" id="btnMenu"><svg width="80" height="43" viewBox="0 0 80 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0L75 3L79.5 9H6.5L0.5 0Z" fill="#1A1D19"/>
            <path d="M0.5 17L75 20L79.5 26H6.5L0.5 17Z" fill="#1A1D19"/>
            <path d="M0.5 34L75 37L79.5 43H6.5L0.5 34Z" fill="#1A1D19"/></svg>
        </span>
        <Nav></Nav>
    </section>;
    
}