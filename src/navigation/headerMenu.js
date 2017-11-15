import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";



class HeaderMenu extends Component {
  render() {
    return (
      <div>
        <div class="navbar banner--clone banner--stick" role="navigation">
          <div class="container">
            <div class="navbar-header">
            <a href="index.html" class="logo" title="Craft beer landing page">
            <img src="images/logo.svg" alt="Craft Beer HTML Template" />
            </a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
            </div>
            <div class="navbar-collapse collapse">
              <ul id="menu-primary" class="nav navbar-nav"  >
                <li class="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="whats-on.html">What's on</a>
                </li>
                <li>
                  <a href="shortcodes.html">Shortcodes</a>
                </li>
                <li class="dropdown">
                  <a href="news.html">News</a>
                <ul class="dropdown-menu">
                  <li><a href="news-single.html">News single</a></li>
                </ul>
                </li>
                <li>
                <a href="contact.html">Contact</a>
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
