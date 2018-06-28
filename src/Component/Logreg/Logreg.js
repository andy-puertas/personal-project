import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';
import axios from 'axios';
import './Logreg.css';

class Logreg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: '',
            password: '',
            error: '',
            loggedIn: ''
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

    login() {
        const {id, email, password} = this.state
        if(email && password) {
          axios.post('/api/login', {id: id, email: email.toLowerCase(), password: password}).then(res => {
            console.log(res.data)
            if (res.data.length !== 0) {
                        //this.setState({ error: res.data })
                        this.setState({loggedIn: 'You are now signed in!', error: ''})
                        this.props.getUser(res.data);
                    } 
          })
            } else {
            this.setState({error: 'Please fill in both fields'})
            }
    }

    register() {
        const {id, email, password} = this.state
        if(email && password) {
          axios.post('/api/register', {id: id, email: email.toLowerCase(), password: password}).then(res => {
            if (res.data.length !== 0) {
              console.log(res.data)
                        // this.setState({ error: res.data })
                        this.setState({loggedIn: 'You are now registered and have logged in successfully!', error: ''})
                        this.props.getUser(res.data);
                    } 
          })
            } else {
            this.setState({error: 'Please fill in both fields'})
            }
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

                <br /><br />
                
                <button className='login-button' onClick={() => this.login()}>Login</button>
                <button className='register-button' onClick={() => this.register()}>Register</button>

                <h4>{this.state.error}</h4>
                <h2>{this.state.loggedIn}</h2>


            </div>

        )
    }
}

export default connect(null, { getUser })(Logreg)