import React, {Component} from 'react';
import CalendarNav from '../CalendarNav/CalendarNav';
import Logreg from '../Logreg/Logreg';
//import axios from 'axios';


export default class Home extends Component {
    // constructor(){
    //     super();
    // }
    render() {
        return(
            <div>
                <Logreg />
                <CalendarNav />
            </div>
        )
    }
}