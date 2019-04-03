import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './container/CompanyContainer';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: 'PT Serif, serif' }}>
 
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={CompanyContainer} />
          </Switch>

        
      </div>
    );
  }
}

export default App;
