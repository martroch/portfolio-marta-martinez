import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function GetWorks(){
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('json/projects.json')
    .then(response => setCards(response.data.filter(element => element.category == 'digital')));
    }, [])

    console.log(cards)
    
    return (
        <>
        <section>
        {cards.map(card => (<>
            <Link to={card.id}>
                <img src={card.img1} alt=""/>
            </Link>
        </>))}
        </section>
</>)}



export default GetWorks;