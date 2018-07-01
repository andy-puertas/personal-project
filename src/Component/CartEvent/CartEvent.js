import React, { Component } from 'react';
import './CartEvent.css';


export default class CartEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
        this.localIncrease = this.localIncrease.bind( this )
        this.localDecrease = this.localDecrease.bind( this )
    }

    componentDidMount() {
        this.setState({
            quantity: this.props.item.quantity
        })
    }

    localIncrease() {
        this.props.increase(this.state.quantity, this.props.item.eventid)
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    localDecrease() {
        this.props.decrease(this.state.quantity, this.props.item.eventid)
        this.setState({
            quantity: this.state.quantity - 1
        })
    }




    render() {
        console.log(this.props, this.state)
        const { id, artist, date, time, price, img, quantity, eventid } = this.props.item
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
                <p>Quantity: {this.state.quantity}</p>

                <div className='cart-button-container'>
                    <button className='inc-button' onClick={() => this.localIncrease()}> + </button>
                    <button className='dec-button' onClick={() => this.localDecrease()} > - </button>
                    
                    <button className='delete-button' onClick={() => this.props.delete(id)}>Remove</button>
                </div>
            </div>
        )
    }
}