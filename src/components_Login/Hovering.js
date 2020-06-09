import React, { Component } from 'react'
import Auth from './Auth'


export default class Hovering extends Component {
    render() {
        return (
           
            <div>
            {/* <Switch>
            <ProtectedRoute exact path="/export" component={Export}/>
          </Switch> */}
                <h1>Heyy... {this.props.username}</h1>
                <h3>What's Up?</h3>
                <button onClick={()=> {
                    Auth.logout(()=>{this.props.history.push("/");
                });
                }
                    } >Logout</button>
                <br/> <br/> <br/>
                <h3>Let's go to the export page.</h3>
                <button onClick={()=> {
                    this.props.history.push("/export");
                }
                    } >Export</button>

            </div>
        )
    }
}
