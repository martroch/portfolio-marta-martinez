import React from 'react';
import './slider.css'

export default function 
Slider() { return (
<>
<div className="slide slide-1">
    <div className="slide__tranlation">
        <div className="slide__single slide__1">
            <div className='text-slide'>
            <h2  dangerouslySetInnerHTML={{__html:'Digital <br> Design'}} className="title-slide"></h2>
            <p>Designs, ux/ui, wordpress and front-end coding. These are a mix of freelance, and personal projects I made.</p>
            <button>discober the projects</button>
            </div>
            <img src="/images/digital-design.jpg" alt=""></img>
        </div>
        <div className="slide__single slide__2">
        <div className='text-slide'>
            <h2  dangerouslySetInnerHTML={{__html:'Product <br> Design'}}></h2>
            <p>Product design and interior design made through creativity and adapting to the user through its functionality.</p>
            <button>discober the projects</button>
            </div>
            <img src="/images/product-design.jpg" alt=""></img>
        </div>
        <div className="slide__single slide__3">
        <div className='text-slide'>
            <h2  dangerouslySetInnerHTML={{__html:'Graphic <br> Design'}}></h2>
            <p>Graphic design focusing on colors and typography for brochures, flayers, poster... for companies and events.</p>
            <button>discober the projects</button>
            </div>
            <img src="/images/graphic-design.jpg" alt=""></img>
        </div>
    </div>
</div>
</>
)}