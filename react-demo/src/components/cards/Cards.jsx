import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//.   /digital/1
function GetWorks(props){
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('json/projects.json')
        .then(response => setCards(response.data.filter(element => element.category == props.category)));
    }, [])

    console.log(cards)
    // /1. 
    return (
        <>
        <section>
        {cards.map(card => (<>
            <Link to={`/${props.category}/${card.id}`}>
                <img src={card.img1} alt=""/>
            </Link>
        </>))}
        </section>
</>)}



export default GetWorks;