const initialState = {
    id: 0,
    email: '',
    eventid: 0,
    userid: 0,
    quantity: 1
}

const GET_USER = 'GET_USER';
const UPDATE_CART = 'UPDATE_CART';

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
            return Object.assign({}, state, {
                userid: payload.userid,
                eventid: payload.eventid,
                quantity: payload.quantity
            } );
        default:
            return state;    
    }
}

export function getUser(id, email) {
    console.log(id, email)
    return {
      type: GET_USER,
      payload: {
        id,
        email   
      }
    }
}

export function updateCart(userid, eventid, quantity) {
    console.log(userid, eventid, quantity)
    return {
        type: UPDATE_CART,
        payload: {
            userid,
            eventid,
            quantity
        }
    }
}

