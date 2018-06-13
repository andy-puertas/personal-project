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
            <div>
                <h2>EVENT CALENDAR</h2>
                {/* <Event /> */}
                {events}
            </div>
        )
    }
}