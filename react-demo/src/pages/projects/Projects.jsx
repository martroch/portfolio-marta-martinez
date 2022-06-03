import React from 'react';
import { useParams } from 'react-router-dom';
import GetWorks from '../../components/cards/Cards';

export default function 
Projects() { 
    let params = useParams();

    return (<>
        <GetWorks category={params.category}></GetWorks>
    </>)
}