import React, { useState, useEffect } from 'react';
import './slider.css'
import Slide from './slide';
import { info } from './slider.config';

export default function Slider() {

    const [counter, setCounter] = useState(0);
    const [activeInfo, setActiveInfo] = useState(info[counter]);

    useEffect(() => {
        setTimeout(() => {
            if (counter === info.length - 1) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }, 3000);
    }, [activeInfo]);

    useEffect(() => {
        setActiveInfo(info[counter]);
    }, [counter]);


    return (<>
    <div className="slide">
        <div className="slide__tranlation position-1 ">
            <div className='text-slide'>
                <h2  dangerouslySetInnerHTML={{__html: activeInfo.title}} className="title-slide"></h2>
                <p>{ activeInfo.text }</p>
                <button className='btn-home'><a href={'/' + activeInfo.section} className='color-black'>discober the projects</a></button>
            </div>

            { info.map((slide, index) => <Slide
                classname={slide.classname + ' slide__' +  (counter + index > info.length ? (counter + index) - info.length : counter + index )}
                imgTitle={slide.imgTitle}
                img={slide.img}
            ></Slide>) }
        </div>
    </div>
    </>
)}
