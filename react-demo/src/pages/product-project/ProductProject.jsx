import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './product-project.css'
import { useParams } from 'react-router-dom';

export default function 
ProductProject() {     
    const [info, setInfo] = useState({});
    
    const parameters = useParams();

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
                <img src={info.img1} alt="" className='top-img'/>
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
                <img src={info.img2} alt="" className='img-2'/>
                <div>
                    <h4>TOOLS</h4>
                    {/* {info.tools.map(tool => (<>
                        <li>{tool.tools}</li>
                        </>))
                        } */}
                    <p>{info.work}</p>
                </div>
            </div>
            <img className='text-info' src={info.img3} alt="" />
            <img className='text-info' src={info.img4} alt="" />
            
            <div className='text-how'>
                <img src={info.img5} alt="" className='img-square'/>
                <div className='how'>
                <h4>DISCOVER HOW DO I GET TO</h4>
                <p>{info.how}</p>
                </div>
            </div>
            <div className='text-how'>
                <img src={info.img6} alt="" className='img-square'/>
                <img src={info.img7} alt="" className='img-square'/>
            </div>
        </section>
</>)}