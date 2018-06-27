import React, {Component} from 'react';
import axios from 'axios';
import './Dashcart.css'

export default class DashCart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        axios.get('/api/cart')
        .then( (res) => {
            this.setState({
                cart: res.data
            })
        })
    }
    


    render() {
        //const cart = this.state.cart;
        console.log(this.state)
        return(
            <div>
                <h4>Cart</h4>
                <div className='cart-container'>
                <div></div>
                </div>
            </div>
        )
    }
}