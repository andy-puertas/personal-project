import React, {Component} from 'react';
import axios from 'axios';
//import Event from '../Event/Event';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDetail: []
        }
        this.getDetail = this.getDetail.bind( this )
    }

    componentDidMount() {
        this.getDetail()
    }

    getDetail(){
        axios.get(`api/events/${+this.props.match.params.id}`)
        .then((res) => {
            this.setState({
                eventDetail: res.data
            })
        } )
    }
    

    render () {
        console.log(this.state.eventDetail)
        // let eventDetail = this.state.eventDetail.map( element => {
        //     return (
        //         <div>
        //             <Event eventDetail={element} id={element.id} />
        //         </div>
        //     )
        // })


        return(
            <div>
                {this.props.match.params.id}
                 {/* {eventDetail} */}
            </div>
        )
    }
}