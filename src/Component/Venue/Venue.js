import React, {Component} from 'react';
import pic from '../../assets/s1_venueInfo.jpg';
import './Venue.css';


export default class Venue extends Component {
    render () {
        return (
            <div className='venue-container'>
                <img className='venue-img' src={pic} alt='logo' />
                <h4>VENUE INFORMATION</h4> < br />
                <p>The Depot is a 1200 person capacity, four story venue. The basement contains the dressing 
                    rooms and offices The music hall is located on the second and third floors There is NO PYRO 
                    ALLOWED in the venue Hazers—please contact house production The Depot is a NO SMOKING VENUE. 
                    The Depot box office opens at 6:00 p.m. the night of the show (Excluding club nights and special events). 
                    $3 service fee at The Depot box office The Depot is ADA compliant (Please contact a security guard upon your arrival). 
                    Smith’s Tix is the only official provider of ticketing for The Depot. 
                    For media inquiries please contact: Emma Beilfus, 801-355-5522, EmmaBeilfus@LiveNation.com</p>
            </div>
        )
    }
}