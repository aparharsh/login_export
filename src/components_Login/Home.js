import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            
            <div>
            <Link to="/login"><button>Login</button></Link>
            <div>
                <h1>Hello Everyone.</h1>
                <h2>This is our Home Page.</h2>
            </div>
            </div>
        )
    }
}
