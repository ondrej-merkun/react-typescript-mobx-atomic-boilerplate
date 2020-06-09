import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
            <Route path='/' exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);