import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Home from './components/Home/home'
import Workshops from './components/Workshops/workshops'
import LiveStream from './components/LiveStream/liveStream'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/live_stream" component={LiveStream} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
