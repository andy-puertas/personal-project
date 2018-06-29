import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteCart} from '../../ducks/reducer';
import axios from 'axios';
import CartEvent from '../CartEvent/CartEvent';
import './Dashcart.css';

class Dashcart extends Component {
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
    
    async delete(id) {
        await axios.delete(`/api/ticket/${id}`)
            .then( res => res.data)
             this.getCart();
    }

    


    render() {
        let order = this.state.cart.map( element => {
            return(
                <div>
                    <CartEvent 
                        item={element}
                        id={element.id}
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

function mapStateToProps(state) {
    return {
        userid: state.userid,
        eventid: state.eventid
    }
}

export default connect(mapStateToProps, {deleteCart})(Dashcart)