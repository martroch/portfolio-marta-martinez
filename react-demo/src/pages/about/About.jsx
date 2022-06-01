import React from 'react';
import Rrss from '../../components/rrss/Rrss';
import './about.css'

export default function 
About() { return (
<>
    <section className='top-about'>
        <h1 className='title-top' dangerouslySetInnerHTML={{__html:'Now<br>know<br>me better'}}></h1>
        <img className='gif-about' src="../images/about-me.gif" alt="" />
        <Rrss></Rrss>
        </section>
    <section className='content-about'>
            <div>
                <h2>LANGUAGES</h2>
                <ul className='list'>
                    <li>English C1</li>
                    <li>Italian B2</li>
                    <li>Spanish native</li>
                    <li>Valencian native</li>
                </ul>
                <h2>STUDIES</h2>
                <ul className='list'>
                    <li>Degree Industrial design engineering - CEU</li>
                    <li>Postgraduate degree in front-end web design and development - ESAT</li>
                </ul>
                <img src="../images/marta-martinez.jpg" alt="" />
            </div>
            <p className='text-about' dangerouslySetInnerHTML={{__html:"My versatility keeps me awake in the search for new goals, while my empathy makes me a key player in teamwork. I’m a product designer that have focussed his final studies in web design, with 2 years of work experience as a designer and with knowledge in some different design programs.<br><br> I consider myself a proactive and very creative person, continually searching to obtain innovative and different designs that capture the user's attention."}}></p>
        </section>
        <section>
            <h3 className='programs'>PROGRAMS I USE</h3>
            <div className='content-about'>
                <ul>
                    <li>UX / UI</li>
                    <li>Figma</li>
                    <li>Miroo</li>
                </ul>
                <ul>
                    <li>WEB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Js</li>
                    <li>React</li>
                    <li>Wordpress</li>
                </ul>
                <ul>
                    <li>PRODUCT</li>
                    <li>Rhino zeros</li>
                    <li>AutoCad</li>
                    <li>Keyshot</li>
                </ul>
                <ul>
                    <li>GRAPHIC</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Indesign</li>
                    <li>After Effects</li>
                    <li>Premier</li>
                </ul>
            </div>
        </section>
        </>)
}