import React, {Component} from 'react';
//import axios from 'axios';
import Event from '../Event/Event';

export default class CalendarNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    

    render() {
        return(
            <div>
                <h3>EVENT CALENDAR</h3>
                <Event />
            </div>
        )
    }
}