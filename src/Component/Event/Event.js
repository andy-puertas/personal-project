import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCart} from '../../ducks/reducer'
import './Event.css';
import axios from 'axios';


class Event extends Component {
    constructor(props) {
        super(props);
        this.addTicket = this.addTicket.bind( this )
    }

    addTicket() {
        const {id} = this.props.event;
        console.log(id)
        let cartTicket = {
            id: this.props.id,
            eventid: id,
            quantity: 1
        }
        if (!this.props.id) {
            alert('Log in or register to buy tickets')
        } else {
            axios.post('/api/ticket', {cartTicket})
            .then( res => {
                this.props.updateCart(cartTicket);
                alert('Added to cart!')
                //this.props.history.push('/cart')
            }).catch('err')
        }

    }


    render() {
        console.log(this.props)
        let {id, artist, date, time, price, img} = this.props.event;
            return(
                <div className='event-container'>
                    <div className='event-image-container'>
                        <img className='event-img' src={img} alt='logo' />
                    </div>

                    <div className='event-title'>
                        <p className='artist'>{artist}</p>
                    </div>

                    <br />

                    <div className='event-description'>
                        <p className='date'>{date}</p> 
                        <p className='time'>Show: {time}</p>
                        <p className='price'>${price}</p>
                    </div>    

                    <div className='button-container'>
                        
                        <button className='ticket-button' onClick={() => this.addTicket()}>GET TICKETS</button>
                        
                        <br />
                        <Link to={`/details/${id}`}>
                            <button className='details-button'>EVENT DETAILS</button>
                        </Link>
                    </div>

                </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        id: state.id,
        eventid: state.eventid
    }
}

export default connect(mapStateToProps, { updateCart })(Event)
