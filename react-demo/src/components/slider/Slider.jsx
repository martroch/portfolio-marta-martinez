import React from 'react';
import './slider.css'

export default function 
Slider() { return (
<>
<div className="slide">
    <div className="slide__tranlation position-1 ">
        <div className="slide__single slide__1">
            <div className='text-slide'>
                <h2  dangerouslySetInnerHTML={{__html:'Digital <br> Design'}} className="title-slide"></h2>
                <p>Designs, ux/ui, wordpress and front-end coding. These are a mix of freelance, and personal projects I made.</p>
                <button className='btn-home'><a href="/digital-design" className='color-black'>discober the projects</a></button>
            </div>
            <div className='img-slide-1'>
                <img src="/images/digital-design.jpg" alt=""></img>
                <h4>Digital design</h4>
            </div>
        </div>
        <div className="slide__single slide__2">
            <div className='text-slide'>
                <h2  dangerouslySetInnerHTML={{__html:'Product <br> Design'}} className="title-slide"></h2>
                <p>Product design and interior design made through creativity and adapting to the user through its functionality.</p>
                <button className='btn-home'><a href="/product-design" className='color-black'>discober the projects</a></button>
            </div>
            <div className='img-slide-2'>
                <img src="/images/product-design.jpg" alt="" ></img>
                <h4>Product design</h4>
            </div>
            
        </div>
        <div className="slide__single slide__3">
            <div className='text-slide'>
                <h2  dangerouslySetInnerHTML={{__html:'Graphic <br> Design'}} className="title-slide"></h2>
                <p>Graphic design focusing on colors and typography for brochures, flayers, poster... for companies and events.</p>
                <button className='btn-home'><a href="/graphic-design" className='color-black'>discober the projects</a></button>
            </div>
            <div className='img-slide-3'>
                <img src="/images/graphic-design.jpg" alt=""></img>
                <h4>Graphic design</h4>
            </div>
        </div>
    </div>
</div>
</>
)}