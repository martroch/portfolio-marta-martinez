import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function GetWorks(){
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('json/projects.json')
    .then(response => setProjects(response.data));
    }, [])

    console.log(projects)
    
    return (
        <>
        <section>
        {projects.map(project => (<>
            <Link to={project.id}>
                <p key={project.name}>{ project.name }</p>
            </Link>
        </>))}
        </section>
</>)}



export default GetWorks;