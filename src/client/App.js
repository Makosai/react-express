import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App generated.');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
