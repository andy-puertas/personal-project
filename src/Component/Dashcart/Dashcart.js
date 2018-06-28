import React, {Component} from 'react';
import axios from 'axios';
import CartEvent from '../CartEvent/CartEvent'
import './Dashcart.css';

export default class DashCart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
        this.getCart = this.getCart.bind( this )
        this.delete = this.delete.bind( this )
    }

    componentDidMount() {
        this.getCart()
    }

    getCart() {
        axios.get('/api/cart')
        .then( (res) => {
            this.setState({
                cart: res.data
            })
        })
    }
    
    delete(id) {
        axios.delete(`/api/ticket/${id}`)
        .then( res => this.getCart())
    }
    


    render() {
        let order = this.state.cart.map( element => {
            return(
                <div>
                    <CartEvent 
                        item={element}
                        key={element.id}
                        delete={this.delete}
                    />
                </div>
            )
        })
        
        console.log(this.state)
        return(
            <div>
                <h4>Cart</h4>
                <div className='cart-container'>
                {order} 
                <button>Checkout</button>
                </div>
            </div>
        )
    }
}