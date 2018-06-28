import React, {Component} from 'react';
import CalendarNav from '../CalendarNav/CalendarNav';
import Logreg from '../Logreg/Logreg';
import Slideshow from '../Slideshow/Slideshow';
import './Home.css'
//import axios from 'axios';


export default class Home extends Component {
    // constructor(){
    //     super();
    // }
    render() {
        return(
            <div className='home-view'>
                <Slideshow />
                <Logreg />
                <CalendarNav />
            </div>
        )
    }
}