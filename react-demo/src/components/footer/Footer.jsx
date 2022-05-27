import React from 'react';
import './footer.css';

export default function Footer() {
    
    return (
    <>
        <section className='footer-group'>
        <p className='footer-text'  dangerouslySetInnerHTML={{__html:'Let’s work <br> together'}}></p>
        <div className='footer-content'>
            <div className='footer-mail'>
                <p> get in touch</p>
                <a href="mailto:martinezrochermarta@gmail.com"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.09761 12.997L3.09761 11.003L18.0741 11.003L13.4143 6.34315L14.8285 4.92893L21.8996 12L14.8285 19.0711L13.4143 17.6569L18.0741 12.997L3.09761 12.997Z" fill="black"/></svg>
                </a>
            </div>
            <div className='footer-legal'>
                <p>© 2022 /Powered by Marta Martínez /all right reserved </p>
            </div>
        </div>
        </section>
    </>
    )}