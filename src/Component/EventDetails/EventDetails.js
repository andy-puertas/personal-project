import React, {Component} from 'react';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render () {
        return(
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}