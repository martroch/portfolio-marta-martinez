import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './product-project.css'
import { useParams } from 'react-router-dom';

export default function 
ProductProject() {     
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
        <section className='b-blue'>
                <h3 key={info.top_name}>{info.top_name}</h3>
                <h1 key={info.name} >{info.name}</h1>
                <h3 key={info.sub_name} >{info.sub_name}</h3>
                <img src={"../" +info.img1} alt="" className='top-img'/>
            </section>

            <div className='text-info'>
                <div className='description'>
                    <h4>THE PROJECT</h4>
                    <p key={info.description}>{info.description}</p>
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
            { info.img3 &&<img className='text-info' src={"../" +info.img3} alt="" />}
            { info.img4 &&<img className='text-info' src={"../" +info.img4} alt="" />}
            
            <div className='text-how'>
                <img src={"../"+info.img5} alt="" className='img-square'/>
                <div className='how'>
                <h4>DISCOVER HOW DO I GET TO</h4>
                <p>{info.how}</p>
                </div>
            </div>
            <div className='text-how'>
            { info.img6 &&<img src={"../" +info.img6} alt="" className='img-square'/>}
            {info.img7 &&<img src={"../" +info.img7} alt="" className='img-square'/>}
            </div>
            <div className='container-links-back'>
            <div className='border'>
                <Link className='links-back' to="/product-design">Back to product project</Link>
            </div>
            </div>
        </section>
</>)}