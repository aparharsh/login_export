import './App.css';
import Export from './components_export/Export'
import Home from './components_Login/Home'
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components_Login/Login'
import Hovering from './components_Login/Hovering'
import {ProtectedRoute} from './components_Login/ProtectedRoute'

export class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
      <div>
        
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/hovering" component={Hovering}/>
            <ProtectedRoute exact path="/export" component={Export}/>
          </Switch>
        {/* <Export /> */}
      </div>
      </BrowserRouter>
    )
  }
}

export default App
