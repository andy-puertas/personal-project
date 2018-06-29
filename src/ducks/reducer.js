//import axios from 'axios';

const initialState = {
    id: 0,
    email: '',
    eventid: 0,
    userid: 0,
    quantity: 1
}

const GET_USER = 'GET_USER';
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
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
                quantity: payload.quantity
            } );
        
        case UPDATE_QUANTITY:
            return Object.assign( {}, state, {
                quantity: payload.quantity
            } );
        
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

export function updateQuantity(quantity) {
    return {
        type: UPDATE_QUANTITY,
        payload:
            quantity
    }
}


