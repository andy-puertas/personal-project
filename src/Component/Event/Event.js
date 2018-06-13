import React from 'react';

export default function Event (props){
    let {artist, date, time, price, img} = props.event;
    console.log(props)
        return(
            <div>
                <img src={img} alt='logo' />
                <p>{artist}</p>
                <p>{date}</p> 
                <p>Show: {time}</p>
                <p>${price}</p>
                <button>FIND TICKETS NOW</button>
                <button>EVENT DETAILS</button>
                <br />
                <br />

            </div>
        )
}
                
