import React from 'react';

export const Display =(props)=>{
    return(
        <div>
            <div>Strikes: {props.strikes}</div>
            <div>Balls: {props.balls}</div>
        </div>
    )
};
