import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import './styles/index.sass';
import './styles/fonts.sass';
import './styles/buttons.sass';

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