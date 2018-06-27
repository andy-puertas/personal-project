import React, {Component} from 'react';
import axios from 'axios';
import './Dashcart.css';

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
        // let order = this.state.cart.map( element => {
        //     return(
        //         <div>
        //             <CartItem 
        //                 item={element}
        //                 key={element.id}
        //             />
        //         </div>
        //     )
        // })
        
        console.log(this.state)
        return(
            <div>
                <h4>Cart</h4>
                <div className='cart-container'>
                {/* {order} */}
                <button>Checkout</button>
                </div>
            </div>
        )
    }
}