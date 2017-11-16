import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";



class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    }
  }
  render() {

    const workshops = window.location.hash.match('#/workshops') ? 'active' : '';
    const live_stream = window.location.hash.match('#/live_stream') ? 'active' : '';
    return (
      <div>
        <div className="navbar banner--clone banner--stick" role="navigation">
          <div className="container">
            <div className="navbar-header">
            <Link to="/" className="logo" title="Craft beer landing page">
              <img src="images/logo.svg" alt="Craft Beer HTML Template" />
            </Link>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav" style={{marginTop: '-24.5px'}} >

                <li className={workshops}>
                  <Link to="/workshops">Workshops</Link>
                </li>
                <li className={live_stream}>
                  <Link to="/live_stream">Test</Link>
                </li>
                <li className="dropdown">
                  <Link to="/">News</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/">News single</Link></li>
                </ul>
                </li>
                <li>
                <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;
