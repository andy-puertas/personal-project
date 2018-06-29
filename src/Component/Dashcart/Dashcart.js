import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {deleteCart} from '../../ducks/reducer';
// import {increaseQuantity} from '../../ducks/reducer';
// import {decreaseQuantity} from '../../ducks/reducer';
import axios from 'axios';
import CartEvent from '../CartEvent/CartEvent';
import './Dashcart.css';

class Dashcart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: 0
        }

        this.getCart = this.getCart.bind( this )
        this.delete = this.delete.bind( this )
        this.calcTotal = this.calcTotal.bind( this )
        //this.incQuant = this.incQuant.bind( this)
        //this.decQuant = this.decQuant.bind( this )
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
            this.calcTotal();
        })
    }
    
    async delete(id) {
        await axios.delete(`/api/ticket/${id}`)
            .then( res => res.data)
             this.getCart();
             this.calcTotal();
    }

    
    // incQuant(id) {
    //    axios.put(`/api/cart/${id}`)
    //        .then( res => res.data)
    //        this.props.increaseQuantity()
    // }

    // decQuant(id) {
    //        axios.put(`/api/cart/${id}`)
    //        .then( res => res.data)
    //        this.props.decreaseQuantity()

    // }

    calcTotal(){
        let cartTotal = 0
        for(let i = 0; i < this.state.cart.length; i++ ){
            cartTotal += +this.state.cart[i].price * this.state.cart[i].quant
        } this.setState({
            total: cartTotal
        })
    }

    


    render() {
        let order = this.state.cart.map( element => {
            return(
                <div>
                    <CartEvent 
                        item={element}
                        id={element.id}
                        delete={this.delete}
                        // decQuant={this.decrease}
                        // incQuant={this.increase}
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

                <p>Total: {this.state.total}</p>    
                    <button>Checkout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userid: state.userid,
        eventid: state.eventid,
        quantity: state.quantity
    }
}

export default connect(mapStateToProps)(Dashcart)