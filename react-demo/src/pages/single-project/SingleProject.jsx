import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './single-project.css'

export default function 
Project() {     
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        axios.get('../json/projects.json')
    .then(response => setContent(response.data));
    }, [])

    console.log(content)
    
    return (
        <>
        <section>
        {content.map(info => (<>
            <section className='b-color'>
                <h3 key={info.top_name}>{info.top_name}</h3>
                <h1 key={info.name}>{info.name}</h1>
                <h3 key={info.sub_name}>{info.sub_name}</h3>
                <img width="900px" src={info.img1} alt="" className='top-img'/>
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
                <img src={info.img2} alt="" />
                <div>
                    <h4>TOOLS</h4>
                    <ul><li>{info.tools}</li></ul>
                    <p>{info.work}</p>
                </div>
            </div>
            <img className='text-info' src={info.img3} alt="" />
            <img className='text-info' src={info.img4} alt="" />
            <video>  
            <source src={info.video} type="video/mp4">
            </source>
            </video>
            <div className='text-info'>
                <img src={info.img5} alt="" className='img-square'/>
                <div className='how'>
                <h4>DISCOVER HOW DO I GET TO</h4>
                <p>{info.how}</p>
                </div>
            </div>
            <div className='text-info'>
                <img src={info.img6} alt="" className='img-square'/>
                <img src={info.img7} alt="" className='img-square'/>
            </div>





        </>))}
        </section>
</>)}