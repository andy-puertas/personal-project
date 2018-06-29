import React, { Component } from 'react';
import './CartEvent.css';


export default class CartEvent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, artist, date, time, price, img, quantity } = this.props.item
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
                <p>Quantity: {quantity}</p>

                <div className='cart-button-container'>
                    <button className='inc-button' onClick={() => this.props.increase}> + </button>
                    <button className='dec-button' onClick={() => this.props.decrease} > - </button>
                    
                    <button className='delete-button' onClick={() => this.props.delete(id)}>Remove</button>
                </div>
            </div>
        )
    }
}