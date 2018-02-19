import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import One from './Components/One'
import Two from './Components/Two'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  }
}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => (<One {...props} example={1}/>)}/>
          <Route exact path='/two' render={(props) => (<Two {...props} example={2}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
