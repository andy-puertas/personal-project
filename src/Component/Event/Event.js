import React from 'react';
import './Event.css';

export default function Event (props){
    let {artist, date, time, price, img} = props.event;
        return(
            <div className='event-container'>
                <div className='image'>
                    <img src={img} alt='logo' />
                </div>

                <div className='event-title'>
                    <p className='artist'>{artist}</p>
                </div>

                <div className='event-description'>
                    <p className='date'>{date}</p> 
                    <p className='time'>Show: {time} </p>
                    <p className='price'>${price}</p>
                </div>    

                <div className='button-container'>
                    <button className='ticket-button'>GET TICKETS</button>
                    <br />
                    <button className='details-button'>EVENT DETAILS</button>
                </div>

            </div>
        )
}
                
