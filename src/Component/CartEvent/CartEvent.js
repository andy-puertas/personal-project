import React, { Component } from 'react';
import './CartEvent.css';


export default class CartEvent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, artist, date, time, price, img } = this.props.item
        return (
            <div className='event-order'>            
                
                <div className='pic-container'>
                        <img id='cart-pic' src={img} alt='logo' />
                </div>
                
                <div>
                    <h3 id='artist-title'>{artist}</h3>
                </div>
                <div className='cart-description'>
                    <p id='cart-date'>{date}</p>
                    <p id='cart-time'>{time}</p>
                    <p id='cart-price'>${price}</p>
                </div>

                < br />
                <button>Quantity: 1</button>
                <button className='delete-button' onClick={() => this.props.delete(id)}>Remove</button>
            </div>
        )
    }
}