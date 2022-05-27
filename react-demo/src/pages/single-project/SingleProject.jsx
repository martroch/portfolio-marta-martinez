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
        
        <h1>single project</h1>
        <section>
        {content.map(info => (<>
            <section>
                <h3 key={info.top_name}>{info.top_name}</h3>
                <h1 key={info.name}>{info.name}</h1>
                <h3 key={info.sub_name}>{info.sub_name}</h3>
                <img src={info.img1} alt="" />
            </section>
            <div className='text-info'>
                <div>
                    <h4>GOALS</h4>
                    <p key={info.goals}>{info.goals}</p>
                </div>
                <div>
                <h4>CONCLUSION</h4>
                <p key={info.conclusion}>{info.conclusion}</p>
                </div>
            </div>


        </>))}
        </section>
</>)}