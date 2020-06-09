import React, { Component } from 'react'
import Auth from './Auth'
import Hovering from './Hovering';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            credentials : [
                {username: "abc_def", pass: "1234"},
                {username: "jkl_mno", pass: "6789"}
            ],
            username: ""
    };
}

    checkLogin = (e) => {
        e.preventDefault()
        if((this.state.credentials.findIndex(p => p.username === e.target[0].value)) !== -1 && (this.state.credentials[this.state.credentials.findIndex(p => p.username === e.target[0].value)].pass === e.target[1].value)){
            this.setState({username: e.target[0].value})
            Auth.login(() => {
                this.props.history.push("/hovering");
            })  
            return <Hovering username={this.state.username} />

        }
        else{ alert('Invalid Credentials')}
    }

    changeUsername = () => {
        this.setState({username:""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.checkLogin}>   
                    <p>Username</p>
                    <input type='text' placeholder='Username' />
                    <br/> <br/>
                    <p>Password</p>
                    <input type='password' placeholder='Password'/>
                    <br/><br/>
                    <input type='submit'/>
                </form>
                {/* <Auth chng={this.changeUsername}/> */}
            </div>
        )
    }
}

