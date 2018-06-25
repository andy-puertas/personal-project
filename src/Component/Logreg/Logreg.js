import React, {Component} from 'react';
import './Logreg.css';

export default class Logreg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind( this )
        this.handlePassword = this.handlePassword.bind( this )
    }

    handleEmail(input) {
        this.setState({
            email: input
        })
    }

    handlePassword(input) {
        this.setState({
            password: input
        })
    }


    render() {
        console.log(this.state)

        return(

            <div className='log-container'>
                <h3>Sign In!</h3>
                <p>Email:</p>
                <input onChange={(e) => {this.handleEmail(e.target.value)}} type='text' />

                <p>Password:</p>
                <input onChange={(e) => {this.handlePassword(e.target.value)}} type='password' />

                <br />
                <br />
                <button>Login</button>
                <button>Register</button>
            </div>

        )
    }
}