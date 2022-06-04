import React from 'react';
import Rrss from '../../components/rrss/Rrss';
import './about.css'

export default function 
About() { return (
<>
    <section className='top-about'>
        <h1 className='title-top' dangerouslySetInnerHTML={{__html:'Now<br>know<br>me better'}}></h1>
        <img className='gif-about' src="images/about-me.gif" alt="" />
        <Rrss></Rrss>
        </section>
    <section className='content-about'>
            <div className='content-about-int'>
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
        <section className='section-programs'>
            <h3 className='programs'>PROGRAMS I USE</h3>
            <div className='list-programs'>
                <div className='list-intern'>
                    <ul>
                        <h4 className='title-programs'><strong>UX / UI</strong></h4>
                        <li>Figma</li>
                        <li>Miroo</li>
                    </ul>
                    <ul>
                        <h4 className='title-programs'><strong>WEB</strong></h4>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>Js</li>
                        <li>React</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className='list-intern'>
                    <ul>
                        <h4 className='title-programs'><strong>PRODUCT</strong></h4>
                        <li>Rhino zeros</li>
                        <li>AutoCad</li>
                        <li>Keyshot</li>
                    </ul>
                    <ul>
                        <h4 className='title-programs'><strong>GRAPHIC</strong></h4>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Indesign</li>
                        <li>After Effects</li>
                        <li>Premier</li>
                    </ul>
                </div>
            </div>
            <div className='btns-projects'>
                <button className="btn_button"><a className='color-white' href="/digital-design">Web projects</a></button>
                <button className="btn_button"><a className='color-white' href="/product-design">Product projects</a></button>
                <button className="btn_button"><a className='color-white' href="/graphic-design">Graphic projects</a></button>
            </div>
        </section>
        </>)
}