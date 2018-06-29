//import axios from 'axios';

const initialState = {
    id: 0,
    email: '',
    eventid: 0,
    userid: 0,
    quantity: 1,
    total: 0
}

const GET_USER = 'GET_USER';
const UPDATE_CART = 'UPDATE_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
const DELETE_CART = 'DELETE_CART'

export default function reducer(state=initialState, action) {
    let {type, payload} = action
    console.log(payload)
    switch(type) {
        case GET_USER:
            return Object.assign( {}, state, { 
                id: payload.id,
                email: payload.email
            } );

        case UPDATE_CART:
            return Object.assign( {}, state, {
                eventid: payload.eventid,
                userid: payload.userid,
                quantity: payload.quantity,
                total: state.total += action.price
            } );
        
        case INCREASE_QUANTITY:
            return Object.assign( {}, state, {
                quantity: ++state.quantity,
                userid: payload.userid,
                eventid: payload.eventid
            } );

        case DECREASE_QUANTITY:
            return Object.assign({}, state, {
                quantity: --state.quantity,
                userid: payload.user,
                eventid: payload.eventid
            })    
        
        case DELETE_CART + '_FULFILLED':
            return Object.assign({}, state, {
                userid: payload.userid,
                eventid: payload.eventid
            } )

        default:
            return state;    
    }
}

export function getUser(id, email) {
    console.log(id[0].email)
    return {
      type: GET_USER,
      payload: 
        id[0]
        //email   
      
    }
}

export function updateCart(cartTicket) {
    //const {userid, eventid, quantity } = cartTicket
    console.log(cartTicket)
    return {
        type: UPDATE_CART,
        payload: 
            cartTicket
    }
}

export function deleteCart(userid, eventid) {
    
    console.log(userid, eventid)
    return {
        type: DELETE_CART,
        payload:
            userid,
            eventid
            
    }
}

export function increaseQuantity(quantity) {
    console.log(quantity)
    return {
        type: INCREASE_QUANTITY,
        payload:
            quantity
    }
}

export function decreaseQuantity(quantity) {
    console.log(quantity)
    return {
        type: DECREASE_QUANTITY,
        payload:
            quantity
    }
}




