import React, { useState, useEffect } from 'react';
import './home.css'
import Slider from '../../components/slider/Slider';
import Typing from './Typing';

export default function Home() { 
    const [ width, setWidth ] = useState(300);
    useEffect(() => document.onscroll = () => setWidth(width + (window.scrollY / 10)), []);
    
    return (
    <>
    <section className="container">
        <div className="center" style={{
                width: width + 'px',
                height: width + 'px',
                position: window.scrollY > 2400 ? 'static' : 'fixed'
            }}>
            <div className='title-home'>
                <h3 className='title-home-1'> WHAT ARE YOU</h3>
                <h3 className='title-home-2'> LOOKING FOR? </h3>
                <Typing></Typing>
            </div>
            <div className='rrss-home'>
                <a href=""><img src="../images/linkedin-b.svg" alt="" /></a>
                <a href=""><img src="../images/github-b.svg" alt="" /></a>
                <a href=""><img src="../images/instagram-b.svg" alt="" /></a>
            </div>
            <div className='discover-arrow'>
                <a href="/#slider" className='arrow'>
                    <p className='discover'>discover</p>
                    <img src="../images/arrow-home.svg" alt="" />
                </a>
            </div>
        </div>
        
    </section>

    <Slider></Slider>
    </>
    ) 
}

