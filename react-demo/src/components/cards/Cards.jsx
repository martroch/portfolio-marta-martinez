import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './cards.css';

//.   /digital/1
function GetWorks(props){
    const [cards, setCards] = useState([]);
    const[ designs, setDesigns ] = useState([]);

    useEffect(() => {
        axios.get('json/projects.json')
        .then(response => setCards(response.data.filter(element => element.category == props.category)));
        axios.get('json/design.json')
        .then(response => setDesigns(response.data.filter(element => element.category == props.category)));
    }, [props.category])
    // /1. 
    return (
        <>
        {designs.map(design=> (<>
        <section className='header-cards'>
            <h3 className="center-text head-sub-text">{design.top_name}</h3>
            <h1 className="center-text">{design.name}</h1>
            <h3 className="center-text head-sub-text">{design.sub_name}</h3>
            <p className="center-text">{design.explanation}</p>
        </section>
        </>))}
        <section className="cards">
        {cards.map(card => (<>
            <article className="card">
                <Link to={`/${props.category}/${card.id}`}>
                    {/* <div style={{'--bg-image':`${card.img1}`}} className="card-img"> */}
                    {/* </div> */}
                    <div className={card.color + " content-card"}>
                        <h2 className='title-card'>{card.name}</h2>
                        <p className='text-card'>{card.sub_name}</p>
                    </div>
                    <img src={card.img1} alt="" className="card__img"></img>

                </Link>
                
            </article>
            
            
        </>))}
        </section>
</>)}



export default GetWorks;