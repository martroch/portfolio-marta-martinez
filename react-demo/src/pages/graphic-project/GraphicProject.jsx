import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './graphic-project.css'
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
        <section className='b-pink'>
                <h3 key={info.top_name} >{info.top_name}</h3>
                <h1 key={info.name}>{info.name}</h1>
                <h3 key={info.sub_name}>{info.sub_name}</h3>
                <img src={"../" + info.img1} alt="" className='top-img'/>

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
                    <p className='description' key={info.working}>{info.working}</p>
                    <h4>TOOLS</h4>
                    <ul className='list-tools'>{ info.tools && info.tools.map(tool =>(<><li>{tool}</li></>))}</ul>
                    <p>{info.work}</p>
                </div>
            </div>
            { info.img3 &&<img className='text-info'src={"../" +info.img3} alt="" />}
            { info.img4 &&<img className='text-info' src={"../" +info.img4} alt="" />}
            { info.img5 &&<img className='text-info' src={"../" +info.img5} alt="" />}
            { info.img6 &&<img className='last-img' src={"../" +info.img6} alt="" />}
            <div className='container-links-back'>
            <div className='border'>
                <Link className='links-back' to="/graphic-design">Back to graphic project</Link>
                </div>
            </div>
        </section>
</>)}