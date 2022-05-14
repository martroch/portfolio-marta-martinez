import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export default function Nav() {
return <nav className='menu' id="menu">
        <Link className='menu__item' to="/">Home</Link>
        <Link className='menu__item' to="/about">About me</Link>
        <Link className='menu__item' to="/digital-design">Digital design</Link>
        <Link className='menu__item' to="/graphic-design">graphic design</Link>
        <Link className='menu__item' to="/product-design">product design</Link>
    </nav>}