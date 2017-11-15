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
<<<<<<< HEAD



        <LiveVideo/>
        <div id="hero" className="carousel slide carousel-fade" data-ride="carousel">

        </div>
=======
>>>>>>> 299749df5bfb7c7e91b0b8bac4ef19c676d2b0e5
        </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
