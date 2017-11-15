import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Menu from './../../navigation/headerMenu'
import LiveVideo from './liveVideo'



class Workshops extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">

        <Menu/>

         <div id="hero" className="carousel slide carousel-fade" data-ride="carousel">



        <LiveVideo/>
        <div id="hero" className="carousel slide carousel-fade" data-ride="carousel">

        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
