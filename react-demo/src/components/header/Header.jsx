import React, {useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './header.css';
import Nav from '../nav/Nav';

export default function Header() {
    const [sidebar, setSidebar] = useState (false);
    const showSidebar = () => setSidebar (!sidebar);

return (
<> 
    <div className='navbar'>
        <Link className='name' to="/">Marta Martínez Rocher</Link>
        <Link to='#' onClick={showSidebar} className='menu-bars'>
        <svg width="45" height="32,25" viewBox="0 0 80 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0L75 3L79.5 9H6.5L0.5 0Z" fill="#1A1D19"/>
        <path d="M0.5 17L75 20L79.5 26H6.5L0.5 17Z" fill="#1A1D19"/>
        <path d="M0.5 34L75 37L79.5 43H6.5L0.5 34Z" fill="#1A1D19"/></svg>
        </Link>
    </div> 
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'} id='navbar'>
        <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <a className='name-menu' href="/">Marta Martínez Rocher</a>
                    <Link to='#' className='menuBars'>X</Link>
                </li>
                <Nav></Nav>
        </ul>
    </nav>
</>
    )}