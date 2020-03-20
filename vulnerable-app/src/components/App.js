import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Login from './Login';
import Verified from './Verified';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/verified' component={Verified} />
        </div>
      </Router>
    );
  }
}

export default App;
