import React, { useState, useEffect } from 'react';

export const typ= [
    {
        text: "UX / UI"
    }, 
    {
        text: "Front-end"
    }, 
    {
        text: "Wordpress"
    }, 
    {
        text: "Graphic design"
    }, 
    {
        text: "Product design"
    }
    
];

export default function Typing() {

    const [counter, setCounter] = useState(0);
    const [activeTyp, setActiveTyp] = useState(typ[counter]);

    useEffect(() => {
        setTimeout(() => {
            if (counter === typ.length - 1) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }, 1000);
    }, [activeTyp]);

    useEffect(() => {
        setActiveTyp(typ[counter]);
    }, [counter]);


    return (<>
            <p className='typing'>{ activeTyp.text }</p>
    </>)}
