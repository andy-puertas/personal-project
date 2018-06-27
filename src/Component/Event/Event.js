import React from 'react';
import {Link} from 'react-router-dom';
import './Event.css';
//import axios from 'axios';

export default function Event (props) {

    console.log(props)
    let {id, artist, date, time, price, img} = props.event;
        return(
            <div className='event-container'>
                <div className='image-container'>
                    <img src={img} alt='logo' />
                </div>

                <div className='event-title'>
                    <p className='artist'>{artist}</p>
                </div>

                <div className='event-description'>
                    <p className='date'>{date}</p> 
                    <p className='time'>Show: {time}</p>
                    <p className='price'>${price}</p>
                </div>    

                <div className='button-container'>
                    <button className='ticket-button'>GET TICKETS</button>
                    <br />
                    <Link to={`/details/${id}`}>
                        <button className='details-button'>EVENT DETAILS</button>
                    </Link>
                </div>

            </div>
        )
}
                
