import React, {Component} from 'react';
import axios from 'axios';
import Event from '../Event/Event';
import './CalendarNav.css';

export default class CalendarNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
        this.getEvents = this.getEvents.bind( this )
        // this.addToCart = this.addToCart.bind( this )
    }

    componentDidMount() {
        this.getEvents()
    }

    getEvents() {
        axios.get('/api/events')
        .then((res) => {
            this.setState({
                events: res.data
            })
        })
    }

    // addToCart(cart) {
    //     axios.post('/api/ticket')
    //     .then(res => {
    //         cart: res.data
    //     })
    // }

    

    render() {
        //console.log(this.state)
        let events = this.state.events.map( element => {
            return(
                <div>
                    <Event event={element} key={element.id}/>
                </div>
            )
        }
    )
        
        
        return(
            <div className=''>
                <h2 id='calender-header'>EVENT CALENDAR</h2>
                {/* <Event /> */}
                {events}
            </div>
        )
    }
}