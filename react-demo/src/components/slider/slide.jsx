import React from 'react';

export default function Slide(props) {
    return( <>
        <div className={props.classname}>
            <div className='img-slide'>
                <img src={props.img} alt=""></img>
                <h4>{props.imgTitle}</h4>
            </div>
        </div>
    </>)
}