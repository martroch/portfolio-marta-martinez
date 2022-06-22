import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './digital-project.css'
import { useParams } from 'react-router-dom';

export default function 
DigitalProject() {     
    const [info, setInfo] = useState({});
    
    const parameters = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    useEffect(() => {
        axios.get('../json/projects.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id);
                setInfo(selectedProject)
            });
    }, [])
    
    return (
        <>
        <section>
        <section className='b-yellow'>
                <h3 key={info.top_name} >{info.top_name}</h3>
                <h1 key={info.name}>{info.name}</h1>
                <h3 key={info.sub_name}>{info.sub_name}</h3>
                <img src={"../" +info.img1} alt="" className='top-img'/>

            </section>
            <div className='text-info'>
                <div className='info-1'>
                    <h4>GOALS</h4>
                    <p key={info.goals}>{info.goals}</p>
                </div>
                <div className='info-2'>
                <h4>CONCLUSION</h4>
                <p key={info.conclusion}>{info.conclusion}</p>
                </div>
            </div>
            <div className='text-info'>
                <img src={"../" +info.img2} alt="" className='img-2'/>
                <div>
                    <h4>TOOLS</h4>
                    <ul className='list-tools'>{ info.tools && info.tools.map(tool =>(<><li>{tool}</li></>))}</ul>
                    { info.link_web && <p className='links'><a href={info.link_web} className="color-black"  target="_blank">go to website</a><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M9.99209 22.6357L8.84836 21.0023L21.1164 12.4121L14.6265 11.2678L14.9738 9.29815L24.8219 11.0346L23.0854 20.8827L21.1158 20.5354L22.2601 14.0455L9.99209 22.6357Z" fill="black"/>
                        </svg>
                    </p>}
                    { info.link_code && <p className='links'><a href={info.link_code} className="color-black"  target="_blank">go to code</a><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M9.99209 22.6357L8.84836 21.0023L21.1164 12.4121L14.6265 11.2678L14.9738 9.29815L24.8219 11.0346L23.0854 20.8827L21.1158 20.5354L22.2601 14.0455L9.99209 22.6357Z" fill="black"/>
                        </svg>
                    </p>}
                </div>
            </div>
            { info.img3 &&<img className='text-info' src={"../" +info.img3} alt="" />}
            { info.img4 &&<img className='text-info' src={"../" +info.img4} alt="" />}
            <div className='video-project'>
            { info.video &&<video width={"70%"} src={"../" +info.video} controls autoPlay loop muted >
            </video>}
            </div>
            <div className='text-how'>
                <img src={"../" +info.img5} alt="" className='img-square'/>
                <div className='how'>
                <h4>DISCOVER HOW DO I GET TO</h4>
                <p>{info.how}</p>
                </div>
            </div>
            <div className='text-how'>
                { info.img6 && <img src={"../" +info.img6} alt="" className='img-square'></img>}
                { info.img7 && <img src={"../" +info.img7} alt="" className='img-square'/>}
            </div>
            <div className='container-links-back'>
                <div className='border'>
                    <Link className='links-back' to="/digital-design">Back to digital project</Link>
                </div>
            </div>
            
        </section>
</>)}