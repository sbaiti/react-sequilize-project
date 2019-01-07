import React, { Component } from 'react';
import Register from './components/register/Register';
import Users from './components/users/Users';
import Home from './components/home/Home';
import { Switch, Route, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/searchUsers' component={Users} />
          <Route path='/register' component={Register} />
          <Redirect from='/' exact to='/home' />
        </Switch>

      </div>

    );
  }
}

export default App;
