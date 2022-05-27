import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './nav.css';
import Rrss from '../rrss/Rrss';

export default function Nav() {
return <nav className='menu' id="menu">
        <Link className='menu__item' to="/">Home</Link>
        <Link className='menu__item' to="/about">About me</Link>
        <Link className='menu__item' to="/digital-design">Digital design</Link>
        <Link className='menu__item' to="/graphic-design">graphic design</Link>
        <Link className='menu__item' to="/product-design">product design</Link>
        <div className='contact-section'>
        <p className='contact-text'>CONTACT ME</p>
        <a href="tel:+34609757756" className='color-white'>tel.+34 609 757 756</a>
        <a href="mailto:martinezrochermarta@gmail.com" className='color-white'>martinezrochermarta@gmail.com</a>
        </div>
        <Rrss></Rrss>
    </nav>
}