import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Home from './components/Home/home'
import Workshops from './components/Workshops/workshops'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/workshops" component={Workshops} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
