const initialState = {
    id: 0,
    email: '',
    eventid: 0,
    quantity: 1
}

const GET_USER = 'GET_USER';

export default function reducer(state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case GET_USER:
            return Object.assign( {}, state, { 
                id: action.payload.id,
                email: action.payload.email} );
        
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
};

