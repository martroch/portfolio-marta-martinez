import React from 'react';
import './home.css'

export default function 
Home() { 
    const center = document.querySelector('.center');
    let width = 200;
    let lastPosition = 0;
    document.onscroll = function(ev) {
    width = width + (lastPosition > window.scrollY ? -2 : 2);
    lastPosition = window.scrollY;
    center.style.width = width + 'px';
    center.style.height = width + 'px';
    console.log(lastPosition);
    if (lastPosition > 2500) {
        document.querySelector('.center').style.position = 'static';
    } else {
            document.querySelector('.center').style.position = 'fixed';}
        }
    return (
    <>
    <section class="container">
    <div class="center">hola</div>
    </section>
    <section class="container abc">
    hola
    </section>
    </>
    ) 
}

