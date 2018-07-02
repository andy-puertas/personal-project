import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {deleteCart} from '../../ducks/reducer';
import {increaseQuantity} from '../../ducks/reducer';
import {decreaseQuantity} from '../../ducks/reducer';
import axios from 'axios';
import CartEvent from '../CartEvent/CartEvent';
import './Dashcart.css';

class Dashcart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: 0,
            
        }

        this.getCart = this.getCart.bind( this )
        this.delete = this.delete.bind( this )
        this.calcTotal = this.calcTotal.bind( this )
        this.incQuant = this.incQuant.bind( this)
        this.decQuant = this.decQuant.bind( this )
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

    
    incQuant( quantity, eventid) {
        console.log(quantity, eventid)
        axios.put(`/api/cart/`, {quantity: ++quantity, eventid})
           .then( res => 
            {
                console.log(res.data)
                this.props.increaseQuantity(res.data[0].quantity)
            }
        )
        this.getCart()
        this.calcTotal()
    }

    decQuant(quantity, eventid) {
           axios.put(`/api/cart/`, {quantity: --quantity, eventid} )
           .then( res => 
            {
                console.log(res.data)
                this.props.decreaseQuantity(res.data[0].quantity)
            }
        )
        this.getCart()
        this.calcTotal()
    }

    calcTotal(){
        //console.log(this.state.total)
        let cartTotal = 0
        for(let i = 0; i < this.state.cart.length; i++ ){
            cartTotal += (+this.state.cart[i].price * this.state.cart[i].quantity)
        } this.setState({
            total: cartTotal
        })
        //console.log(cartTotal)
    }

    


    render() {
        console.log(this.props)
        let order = this.state.cart.map( element => {
            return(
                <div>
                    <CartEvent 
                        item={element}
                        id={element.id}
                        delete={this.delete}
                        decrease={this.decQuant}
                        increase={this.incQuant}
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

                <p>Total: ${this.state.total}</p>    
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
        quantity: state.quantity,
        total: state.total
    }
}

export default connect(mapStateToProps,{increaseQuantity, decreaseQuantity})(Dashcart)